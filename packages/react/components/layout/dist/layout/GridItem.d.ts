import * as React from "react";
declare const _GridItem: React.ForwardRefExoticComponent<{
    area?: import("csstype").Property.GridArea | (`var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`) | (import("csstype").Property.GridArea | (`var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`) | undefined)[] | undefined;
    colEnd?: import("csstype").Property.GridColumnEnd | (`var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`) | (import("csstype").Property.GridColumnEnd | (`var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`) | undefined)[] | undefined;
    colStart?: import("csstype").Property.GridColumnStart | (`var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`) | (import("csstype").Property.GridColumnStart | (`var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`) | undefined)[] | undefined;
    colSpan?: import("csstype").Property.GridColumn | (`var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`) | (import("csstype").Property.GridColumn | (`var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`) | undefined)[] | undefined;
    rowEnd?: import("csstype").Property.GridRowEnd | (`var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`) | (import("csstype").Property.GridRowEnd | (`var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`) | undefined)[] | undefined;
    rowStart?: import("csstype").Property.GridRowStart | (`var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`) | (import("csstype").Property.GridRowStart | (`var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`) | undefined)[] | undefined;
    rowSpan?: import("csstype").Property.GridRow | (`var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`) | (import("csstype").Property.GridRow | (`var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`) | undefined)[] | undefined;
} & {
    as?: "object" | "search" | "big" | "link" | "small" | "sub" | "sup" | "map" | "input" | "base" | "time" | "code" | "data" | "progress" | "track" | "source" | "button" | "address" | "center" | "abbr" | "area" | "article" | "aside" | "audio" | "b" | "bdi" | "bdo" | "blockquote" | "body" | "br" | "canvas" | "caption" | "cite" | "col" | "colgroup" | "datalist" | "dd" | "del" | "details" | "dfn" | "dialog" | "div" | "dl" | "dt" | "em" | "embed" | "fieldset" | "figcaption" | "figure" | "footer" | "form" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "head" | "header" | "hgroup" | "hr" | "html" | "i" | "iframe" | "img" | "ins" | "kbd" | "label" | "legend" | "li" | "main" | "mark" | "menu" | "meta" | "meter" | "nav" | "noscript" | "ol" | "optgroup" | "option" | "output" | "p" | "picture" | "pre" | "q" | "rp" | "rt" | "ruby" | "s" | "samp" | "section" | "select" | "slot" | "span" | "strong" | "summary" | "table" | "tbody" | "td" | "template" | "textarea" | "tfoot" | "th" | "thead" | "tr" | "u" | "ul" | "var" | "video" | "wbr" | "keygen" | "menuitem" | "param" | "noindex" | "webview" | undefined;
} & {
    id?: string | undefined;
    color?: string | undefined;
    content?: string | undefined;
    translate?: "yes" | "no" | undefined;
    hidden?: boolean | undefined;
    slot?: string | undefined;
    style?: React.CSSProperties | undefined;
    title?: string | undefined;
    dir?: string | undefined;
    rel?: string | undefined;
    accessKey?: string | undefined;
    draggable?: (boolean | "false" | "true") | undefined;
    lang?: string | undefined;
    className?: string | undefined;
    prefix?: string | undefined;
    role?: React.AriaRole | undefined;
    children?: React.ReactNode;
    contentEditable?: "inherit" | (boolean | "false" | "true") | "plaintext-only" | undefined;
    inputMode?: "search" | "numeric" | "none" | "url" | "text" | "email" | "tel" | "decimal" | undefined;
    nonce?: string | undefined;
    tabIndex?: number | undefined;
    suppressHydrationWarning?: boolean | undefined;
    "aria-activedescendant"?: string | undefined;
    "aria-atomic"?: (boolean | "false" | "true") | undefined;
    "aria-autocomplete"?: "inline" | "both" | "none" | "list" | undefined;
    "aria-braillelabel"?: string | undefined;
    "aria-brailleroledescription"?: string | undefined;
    "aria-busy"?: (boolean | "false" | "true") | undefined;
    "aria-checked"?: boolean | "false" | "mixed" | "true" | undefined;
    "aria-colcount"?: number | undefined;
    "aria-colindex"?: number | undefined;
    "aria-colindextext"?: string | undefined;
    "aria-colspan"?: number | undefined;
    "aria-controls"?: string | undefined;
    "aria-current"?: boolean | "false" | "time" | "location" | "page" | "true" | "step" | "date" | undefined;
    "aria-describedby"?: string | undefined;
    "aria-description"?: string | undefined;
    "aria-details"?: string | undefined;
    "aria-disabled"?: (boolean | "false" | "true") | undefined;
    "aria-dropeffect"?: "link" | "none" | "copy" | "move" | "execute" | "popup" | undefined;
    "aria-errormessage"?: string | undefined;
    "aria-expanded"?: (boolean | "false" | "true") | undefined;
    "aria-flowto"?: string | undefined;
    "aria-grabbed"?: (boolean | "false" | "true") | undefined;
    "aria-haspopup"?: boolean | "false" | "grid" | "dialog" | "menu" | "listbox" | "true" | "tree" | undefined;
    "aria-hidden"?: (boolean | "false" | "true") | undefined;
    "aria-invalid"?: boolean | "false" | "true" | "grammar" | "spelling" | undefined;
    "aria-keyshortcuts"?: string | undefined;
    "aria-label"?: string | undefined;
    "aria-labelledby"?: string | undefined;
    "aria-level"?: number | undefined;
    "aria-live"?: "off" | "assertive" | "polite" | undefined;
    "aria-modal"?: (boolean | "false" | "true") | undefined;
    "aria-multiline"?: (boolean | "false" | "true") | undefined;
    "aria-multiselectable"?: (boolean | "false" | "true") | undefined;
    "aria-orientation"?: "horizontal" | "vertical" | undefined;
    "aria-owns"?: string | undefined;
    "aria-placeholder"?: string | undefined;
    "aria-posinset"?: number | undefined;
    "aria-pressed"?: boolean | "false" | "mixed" | "true" | undefined;
    "aria-readonly"?: (boolean | "false" | "true") | undefined;
    "aria-relevant"?: "all" | "text" | "additions" | "additions removals" | "additions text" | "removals" | "removals additions" | "removals text" | "text additions" | "text removals" | undefined;
    "aria-required"?: (boolean | "false" | "true") | undefined;
    "aria-roledescription"?: string | undefined;
    "aria-rowcount"?: number | undefined;
    "aria-rowindex"?: number | undefined;
    "aria-rowindextext"?: string | undefined;
    "aria-rowspan"?: number | undefined;
    "aria-selected"?: (boolean | "false" | "true") | undefined;
    "aria-setsize"?: number | undefined;
    "aria-sort"?: "none" | "other" | "ascending" | "descending" | undefined;
    "aria-valuemax"?: number | undefined;
    "aria-valuemin"?: number | undefined;
    "aria-valuenow"?: number | undefined;
    "aria-valuetext"?: string | undefined;
    dangerouslySetInnerHTML?: {
        __html: string | TrustedHTML;
    } | undefined;
    onCopy?: React.ClipboardEventHandler<HTMLElement> | undefined;
    onCopyCapture?: React.ClipboardEventHandler<HTMLElement> | undefined;
    onCut?: React.ClipboardEventHandler<HTMLElement> | undefined;
    onCutCapture?: React.ClipboardEventHandler<HTMLElement> | undefined;
    onPaste?: React.ClipboardEventHandler<HTMLElement> | undefined;
    onPasteCapture?: React.ClipboardEventHandler<HTMLElement> | undefined;
    onCompositionEnd?: React.CompositionEventHandler<HTMLElement> | undefined;
    onCompositionEndCapture?: React.CompositionEventHandler<HTMLElement> | undefined;
    onCompositionStart?: React.CompositionEventHandler<HTMLElement> | undefined;
    onCompositionStartCapture?: React.CompositionEventHandler<HTMLElement> | undefined;
    onCompositionUpdate?: React.CompositionEventHandler<HTMLElement> | undefined;
    onCompositionUpdateCapture?: React.CompositionEventHandler<HTMLElement> | undefined;
    onFocus?: React.FocusEventHandler<HTMLElement> | undefined;
    onFocusCapture?: React.FocusEventHandler<HTMLElement> | undefined;
    onBlur?: React.FocusEventHandler<HTMLElement> | undefined;
    onBlurCapture?: React.FocusEventHandler<HTMLElement> | undefined;
    onChange?: React.FormEventHandler<HTMLElement> | undefined;
    onChangeCapture?: React.FormEventHandler<HTMLElement> | undefined;
    onBeforeInput?: React.FormEventHandler<HTMLElement> | undefined;
    onBeforeInputCapture?: React.FormEventHandler<HTMLElement> | undefined;
    onInput?: React.FormEventHandler<HTMLElement> | undefined;
    onInputCapture?: React.FormEventHandler<HTMLElement> | undefined;
    onReset?: React.FormEventHandler<HTMLElement> | undefined;
    onResetCapture?: React.FormEventHandler<HTMLElement> | undefined;
    onSubmit?: React.FormEventHandler<HTMLElement> | undefined;
    onSubmitCapture?: React.FormEventHandler<HTMLElement> | undefined;
    onInvalid?: React.FormEventHandler<HTMLElement> | undefined;
    onInvalidCapture?: React.FormEventHandler<HTMLElement> | undefined;
    onLoad?: React.ReactEventHandler<HTMLElement> | undefined;
    onLoadCapture?: React.ReactEventHandler<HTMLElement> | undefined;
    onError?: React.ReactEventHandler<HTMLElement> | undefined;
    onErrorCapture?: React.ReactEventHandler<HTMLElement> | undefined;
    onKeyDown?: React.KeyboardEventHandler<HTMLElement> | undefined;
    onKeyDownCapture?: React.KeyboardEventHandler<HTMLElement> | undefined;
    onKeyPress?: React.KeyboardEventHandler<HTMLElement> | undefined;
    onKeyPressCapture?: React.KeyboardEventHandler<HTMLElement> | undefined;
    onKeyUp?: React.KeyboardEventHandler<HTMLElement> | undefined;
    onKeyUpCapture?: React.KeyboardEventHandler<HTMLElement> | undefined;
    onAbort?: React.ReactEventHandler<HTMLElement> | undefined;
    onAbortCapture?: React.ReactEventHandler<HTMLElement> | undefined;
    onCanPlay?: React.ReactEventHandler<HTMLElement> | undefined;
    onCanPlayCapture?: React.ReactEventHandler<HTMLElement> | undefined;
    onCanPlayThrough?: React.ReactEventHandler<HTMLElement> | undefined;
    onCanPlayThroughCapture?: React.ReactEventHandler<HTMLElement> | undefined;
    onDurationChange?: React.ReactEventHandler<HTMLElement> | undefined;
    onDurationChangeCapture?: React.ReactEventHandler<HTMLElement> | undefined;
    onEmptied?: React.ReactEventHandler<HTMLElement> | undefined;
    onEmptiedCapture?: React.ReactEventHandler<HTMLElement> | undefined;
    onEncrypted?: React.ReactEventHandler<HTMLElement> | undefined;
    onEncryptedCapture?: React.ReactEventHandler<HTMLElement> | undefined;
    onEnded?: React.ReactEventHandler<HTMLElement> | undefined;
    onEndedCapture?: React.ReactEventHandler<HTMLElement> | undefined;
    onLoadedData?: React.ReactEventHandler<HTMLElement> | undefined;
    onLoadedDataCapture?: React.ReactEventHandler<HTMLElement> | undefined;
    onLoadedMetadata?: React.ReactEventHandler<HTMLElement> | undefined;
    onLoadedMetadataCapture?: React.ReactEventHandler<HTMLElement> | undefined;
    onLoadStart?: React.ReactEventHandler<HTMLElement> | undefined;
    onLoadStartCapture?: React.ReactEventHandler<HTMLElement> | undefined;
    onPause?: React.ReactEventHandler<HTMLElement> | undefined;
    onPauseCapture?: React.ReactEventHandler<HTMLElement> | undefined;
    onPlay?: React.ReactEventHandler<HTMLElement> | undefined;
    onPlayCapture?: React.ReactEventHandler<HTMLElement> | undefined;
    onPlaying?: React.ReactEventHandler<HTMLElement> | undefined;
    onPlayingCapture?: React.ReactEventHandler<HTMLElement> | undefined;
    onProgress?: React.ReactEventHandler<HTMLElement> | undefined;
    onProgressCapture?: React.ReactEventHandler<HTMLElement> | undefined;
    onRateChange?: React.ReactEventHandler<HTMLElement> | undefined;
    onRateChangeCapture?: React.ReactEventHandler<HTMLElement> | undefined;
    onResize?: React.ReactEventHandler<HTMLElement> | undefined;
    onResizeCapture?: React.ReactEventHandler<HTMLElement> | undefined;
    onSeeked?: React.ReactEventHandler<HTMLElement> | undefined;
    onSeekedCapture?: React.ReactEventHandler<HTMLElement> | undefined;
    onSeeking?: React.ReactEventHandler<HTMLElement> | undefined;
    onSeekingCapture?: React.ReactEventHandler<HTMLElement> | undefined;
    onStalled?: React.ReactEventHandler<HTMLElement> | undefined;
    onStalledCapture?: React.ReactEventHandler<HTMLElement> | undefined;
    onSuspend?: React.ReactEventHandler<HTMLElement> | undefined;
    onSuspendCapture?: React.ReactEventHandler<HTMLElement> | undefined;
    onTimeUpdate?: React.ReactEventHandler<HTMLElement> | undefined;
    onTimeUpdateCapture?: React.ReactEventHandler<HTMLElement> | undefined;
    onVolumeChange?: React.ReactEventHandler<HTMLElement> | undefined;
    onVolumeChangeCapture?: React.ReactEventHandler<HTMLElement> | undefined;
    onWaiting?: React.ReactEventHandler<HTMLElement> | undefined;
    onWaitingCapture?: React.ReactEventHandler<HTMLElement> | undefined;
    onAuxClick?: React.MouseEventHandler<HTMLElement> | undefined;
    onAuxClickCapture?: React.MouseEventHandler<HTMLElement> | undefined;
    onClick?: React.MouseEventHandler<HTMLElement> | undefined;
    onClickCapture?: React.MouseEventHandler<HTMLElement> | undefined;
    onContextMenu?: React.MouseEventHandler<HTMLElement> | undefined;
    onContextMenuCapture?: React.MouseEventHandler<HTMLElement> | undefined;
    onDoubleClick?: React.MouseEventHandler<HTMLElement> | undefined;
    onDoubleClickCapture?: React.MouseEventHandler<HTMLElement> | undefined;
    onDrag?: React.DragEventHandler<HTMLElement> | undefined;
    onDragCapture?: React.DragEventHandler<HTMLElement> | undefined;
    onDragEnd?: React.DragEventHandler<HTMLElement> | undefined;
    onDragEndCapture?: React.DragEventHandler<HTMLElement> | undefined;
    onDragEnter?: React.DragEventHandler<HTMLElement> | undefined;
    onDragEnterCapture?: React.DragEventHandler<HTMLElement> | undefined;
    onDragExit?: React.DragEventHandler<HTMLElement> | undefined;
    onDragExitCapture?: React.DragEventHandler<HTMLElement> | undefined;
    onDragLeave?: React.DragEventHandler<HTMLElement> | undefined;
    onDragLeaveCapture?: React.DragEventHandler<HTMLElement> | undefined;
    onDragOver?: React.DragEventHandler<HTMLElement> | undefined;
    onDragOverCapture?: React.DragEventHandler<HTMLElement> | undefined;
    onDragStart?: React.DragEventHandler<HTMLElement> | undefined;
    onDragStartCapture?: React.DragEventHandler<HTMLElement> | undefined;
    onDrop?: React.DragEventHandler<HTMLElement> | undefined;
    onDropCapture?: React.DragEventHandler<HTMLElement> | undefined;
    onMouseDown?: React.MouseEventHandler<HTMLElement> | undefined;
    onMouseDownCapture?: React.MouseEventHandler<HTMLElement> | undefined;
    onMouseEnter?: React.MouseEventHandler<HTMLElement> | undefined;
    onMouseLeave?: React.MouseEventHandler<HTMLElement> | undefined;
    onMouseMove?: React.MouseEventHandler<HTMLElement> | undefined;
    onMouseMoveCapture?: React.MouseEventHandler<HTMLElement> | undefined;
    onMouseOut?: React.MouseEventHandler<HTMLElement> | undefined;
    onMouseOutCapture?: React.MouseEventHandler<HTMLElement> | undefined;
    onMouseOver?: React.MouseEventHandler<HTMLElement> | undefined;
    onMouseOverCapture?: React.MouseEventHandler<HTMLElement> | undefined;
    onMouseUp?: React.MouseEventHandler<HTMLElement> | undefined;
    onMouseUpCapture?: React.MouseEventHandler<HTMLElement> | undefined;
    onSelect?: React.ReactEventHandler<HTMLElement> | undefined;
    onSelectCapture?: React.ReactEventHandler<HTMLElement> | undefined;
    onTouchCancel?: React.TouchEventHandler<HTMLElement> | undefined;
    onTouchCancelCapture?: React.TouchEventHandler<HTMLElement> | undefined;
    onTouchEnd?: React.TouchEventHandler<HTMLElement> | undefined;
    onTouchEndCapture?: React.TouchEventHandler<HTMLElement> | undefined;
    onTouchMove?: React.TouchEventHandler<HTMLElement> | undefined;
    onTouchMoveCapture?: React.TouchEventHandler<HTMLElement> | undefined;
    onTouchStart?: React.TouchEventHandler<HTMLElement> | undefined;
    onTouchStartCapture?: React.TouchEventHandler<HTMLElement> | undefined;
    onPointerDown?: React.PointerEventHandler<HTMLElement> | undefined;
    onPointerDownCapture?: React.PointerEventHandler<HTMLElement> | undefined;
    onPointerMove?: React.PointerEventHandler<HTMLElement> | undefined;
    onPointerMoveCapture?: React.PointerEventHandler<HTMLElement> | undefined;
    onPointerUp?: React.PointerEventHandler<HTMLElement> | undefined;
    onPointerUpCapture?: React.PointerEventHandler<HTMLElement> | undefined;
    onPointerCancel?: React.PointerEventHandler<HTMLElement> | undefined;
    onPointerCancelCapture?: React.PointerEventHandler<HTMLElement> | undefined;
    onPointerEnter?: React.PointerEventHandler<HTMLElement> | undefined;
    onPointerLeave?: React.PointerEventHandler<HTMLElement> | undefined;
    onPointerOver?: React.PointerEventHandler<HTMLElement> | undefined;
    onPointerOverCapture?: React.PointerEventHandler<HTMLElement> | undefined;
    onPointerOut?: React.PointerEventHandler<HTMLElement> | undefined;
    onPointerOutCapture?: React.PointerEventHandler<HTMLElement> | undefined;
    onGotPointerCapture?: React.PointerEventHandler<HTMLElement> | undefined;
    onGotPointerCaptureCapture?: React.PointerEventHandler<HTMLElement> | undefined;
    onLostPointerCapture?: React.PointerEventHandler<HTMLElement> | undefined;
    onLostPointerCaptureCapture?: React.PointerEventHandler<HTMLElement> | undefined;
    onScroll?: React.UIEventHandler<HTMLElement> | undefined;
    onScrollCapture?: React.UIEventHandler<HTMLElement> | undefined;
    onWheel?: React.WheelEventHandler<HTMLElement> | undefined;
    onWheelCapture?: React.WheelEventHandler<HTMLElement> | undefined;
    onAnimationStart?: React.AnimationEventHandler<HTMLElement> | undefined;
    onAnimationStartCapture?: React.AnimationEventHandler<HTMLElement> | undefined;
    onAnimationEnd?: React.AnimationEventHandler<HTMLElement> | undefined;
    onAnimationEndCapture?: React.AnimationEventHandler<HTMLElement> | undefined;
    onAnimationIteration?: React.AnimationEventHandler<HTMLElement> | undefined;
    onAnimationIterationCapture?: React.AnimationEventHandler<HTMLElement> | undefined;
    onTransitionEnd?: React.TransitionEventHandler<HTMLElement> | undefined;
    onTransitionEndCapture?: React.TransitionEventHandler<HTMLElement> | undefined;
    defaultChecked?: boolean | undefined;
    defaultValue?: string | number | readonly string[] | undefined;
    suppressContentEditableWarning?: boolean | undefined;
    autoFocus?: boolean | undefined;
    contextMenu?: string | undefined;
    spellCheck?: (boolean | "false" | "true") | undefined;
    radioGroup?: string | undefined;
    about?: string | undefined;
    datatype?: string | undefined;
    inlist?: any;
    property?: string | undefined;
    resource?: string | undefined;
    rev?: string | undefined;
    typeof?: string | undefined;
    vocab?: string | undefined;
    autoCapitalize?: string | undefined;
    autoCorrect?: string | undefined;
    autoSave?: string | undefined;
    itemProp?: string | undefined;
    itemScope?: boolean | undefined;
    itemType?: string | undefined;
    itemID?: string | undefined;
    itemRef?: string | undefined;
    results?: number | undefined;
    security?: string | undefined;
    unselectable?: "off" | "on" | undefined;
    is?: string | undefined;
} & {
    marginTop?: 0 | 2 | 1 | 3 | 4 | 8 | 16 | 32 | 64 | 5 | 6 | 10 | 7 | 12 | 11 | 14 | 9 | 20 | 24 | 28 | 36 | 40 | 44 | 48 | 52 | 56 | 60 | 72 | 80 | 96 | undefined;
    marginRight?: 0 | 2 | 1 | 3 | 4 | 8 | 16 | 32 | 64 | 5 | 6 | 10 | 7 | 12 | 11 | 14 | 9 | 20 | 24 | 28 | 36 | 40 | 44 | 48 | 52 | 56 | 60 | 72 | 80 | 96 | undefined;
    marginBottom?: 0 | 2 | 1 | 3 | 4 | 8 | 16 | 32 | 64 | 5 | 6 | 10 | 7 | 12 | 11 | 14 | 9 | 20 | 24 | 28 | 36 | 40 | 44 | 48 | 52 | 56 | 60 | 72 | 80 | 96 | undefined;
    marginLeft?: 0 | 2 | 1 | 3 | 4 | 8 | 16 | 32 | 64 | 5 | 6 | 10 | 7 | 12 | 11 | 14 | 9 | 20 | 24 | 28 | 36 | 40 | 44 | 48 | 52 | 56 | 60 | 72 | 80 | 96 | undefined;
    paddingTop?: 0 | 2 | 1 | 3 | 4 | 8 | 16 | 32 | 64 | 5 | 6 | 10 | 7 | 12 | 11 | 14 | 9 | 20 | 24 | 28 | 36 | 40 | 44 | 48 | 52 | 56 | 60 | 72 | 80 | 96 | undefined;
    paddingRight?: 0 | 2 | 1 | 3 | 4 | 8 | 16 | 32 | 64 | 5 | 6 | 10 | 7 | 12 | 11 | 14 | 9 | 20 | 24 | 28 | 36 | 40 | 44 | 48 | 52 | 56 | 60 | 72 | 80 | 96 | undefined;
    paddingBottom?: 0 | 2 | 1 | 3 | 4 | 8 | 16 | 32 | 64 | 5 | 6 | 10 | 7 | 12 | 11 | 14 | 9 | 20 | 24 | 28 | 36 | 40 | 44 | 48 | 52 | 56 | 60 | 72 | 80 | 96 | undefined;
    paddingLeft?: 0 | 2 | 1 | 3 | 4 | 8 | 16 | 32 | 64 | 5 | 6 | 10 | 7 | 12 | 11 | 14 | 9 | 20 | 24 | 28 | 36 | 40 | 44 | 48 | 52 | 56 | 60 | 72 | 80 | 96 | undefined;
    margin?: 0 | 2 | 1 | 3 | 4 | 8 | 16 | 32 | 64 | 5 | 6 | 10 | 7 | 12 | 11 | 14 | 9 | 20 | 24 | 28 | 36 | 40 | 44 | 48 | 52 | 56 | 60 | 72 | 80 | 96 | undefined;
    padding?: 0 | 2 | 1 | 3 | 4 | 8 | 16 | 32 | 64 | 5 | 6 | 10 | 7 | 12 | 11 | 14 | 9 | 20 | 24 | 28 | 36 | 40 | 44 | 48 | 52 | 56 | 60 | 72 | 80 | 96 | undefined;
    marginX?: 0 | 2 | 1 | 3 | 4 | 8 | 16 | 32 | 64 | 5 | 6 | 10 | 7 | 12 | 11 | 14 | 9 | 20 | 24 | 28 | 36 | 40 | 44 | 48 | 52 | 56 | 60 | 72 | 80 | 96 | undefined;
    marginY?: 0 | 2 | 1 | 3 | 4 | 8 | 16 | 32 | 64 | 5 | 6 | 10 | 7 | 12 | 11 | 14 | 9 | 20 | 24 | 28 | 36 | 40 | 44 | 48 | 52 | 56 | 60 | 72 | 80 | 96 | undefined;
    paddingX?: 0 | 2 | 1 | 3 | 4 | 8 | 16 | 32 | 64 | 5 | 6 | 10 | 7 | 12 | 11 | 14 | 9 | 20 | 24 | 28 | 36 | 40 | 44 | 48 | 52 | 56 | 60 | 72 | 80 | 96 | undefined;
    paddingY?: 0 | 2 | 1 | 3 | 4 | 8 | 16 | 32 | 64 | 5 | 6 | 10 | 7 | 12 | 11 | 14 | 9 | 20 | 24 | 28 | 36 | 40 | 44 | 48 | 52 | 56 | 60 | 72 | 80 | 96 | undefined;
} & {
    borderRadius?: "base" | "none" | "full" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | undefined;
} & {
    boxShadow?: "base" | "outline" | "sm" | "md" | "lg" | "xl" | "2xl" | "xs" | "inner" | "darkLg" | undefined;
} & import("../core/types").ColorProps & React.RefAttributes<HTMLElement>>;
export { _GridItem as GridItem };
