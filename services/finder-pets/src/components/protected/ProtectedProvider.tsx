"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { getLocalToken, getRefreshLocalToken, setLocalToken } from "@/utils/localToken";
import { isTokenExpired } from "@/utils/isTokenExpried";
import Loader from "@/shared/components/loader/Loader";
import { requestFetchAccessTokenWithRefreshToken } from "@/api/auth/requestFetchAccessTokenWithRefreshToken";
import { useRecoilValue } from "recoil";
import authState from "@/recoil/authAtom";

const AuthContext = createContext<any>(null);

export const useAuth = () => useContext(AuthContext);

const ProtectedProvider = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();
  const pathname = usePathname();
  const [loading, setLoading] = useState(true);
  const { isLoggedIn } = useRecoilValue(authState);

  if (!isLoggedIn && pathname.includes("/my-menu")) router.push("/login");

  useEffect(() => {
    const checkToken = async () => {
      const excludedRoutes = ["/", "/register", "/find-id", "/find-password", "/reset-password"];
      const dynamicExcludedRoutes = ["/product", "/categories"];

      if (
        excludedRoutes.includes(pathname) ||
        dynamicExcludedRoutes.some((route) => pathname.startsWith(route))
      ) {
        setLoading(false);
        return;
      }

      try {
        let accessToken = getLocalToken();
        let refreshToken = getRefreshLocalToken();

        if (!accessToken) {
          return router.push("/login");
        }

        if (isTokenExpired(accessToken)) {
          const newTokens = await requestFetchAccessTokenWithRefreshToken(refreshToken as string);

          if (newTokens?.data.accessToken) {
            setLocalToken(newTokens.data.accessToken);
          } else {
            return router.push("/login");
          }
        }
      } catch (error) {
        console.error("토큰 검증 중 에러 발생:", error);
        router.push("/login");
      } finally {
        setLoading(false);
      }
    };

    checkToken();
  }, [router, pathname]);

  if (loading) {
    return <Loader />;
  }

  return <AuthContext.Provider value={null}>{children}</AuthContext.Provider>;
};

export default ProtectedProvider;
