/** @jsxImportSource @emotion/react */


import { ErrorBoundary } from "react-error-boundary"
import { Fragment, useCallback, useContext, useEffect, useRef, useState } from "react"
import { ColorModeContext, EventLoopContext, StateContexts } from "$/utils/context"
import { Event, getBackendURL, isTrue, refs } from "$/utils/state"
import { jsx, keyframes } from "@emotion/react"
import { AlignLeftIcon as LucideAlignLeftIcon, ArrowDownLeftIcon as LucideArrowDownLeftIcon, ArrowDownRightIcon as LucideArrowDownRightIcon, ArrowUpLeftIcon as LucideArrowUpLeftIcon, ArrowUpRightIcon as LucideArrowUpRightIcon, ClipboardCheckIcon as LucideClipboardCheckIcon, ClipboardIcon as LucideClipboardIcon, DicesIcon as LucideDicesIcon, DownloadIcon as LucideDownloadIcon, EraserIcon as LucideEraserIcon, EyeIcon as LucideEyeIcon, EyeOffIcon as LucideEyeOffIcon, FootprintsIcon as LucideFootprintsIcon, ImageIcon as LucideImageIcon, InfoIcon as LucideInfoIcon, MoonIcon as LucideMoonIcon, PaletteIcon as LucidePaletteIcon, RectangleHorizontalIcon as LucideRectangleHorizontalIcon, RectangleVerticalIcon as LucideRectangleVerticalIcon, ScaleIcon as LucideScaleIcon, ScalingIcon as LucideScalingIcon, ScanIcon as LucideScanIcon, SparklesIcon as LucideSparklesIcon, SproutIcon as LucideSproutIcon, SunIcon as LucideSunIcon, TypeIcon as LucideTypeIcon, WifiOffIcon as LucideWifiOffIcon } from "lucide-react"
import { toast, Toaster } from "sonner"
import env from "$/env.json"
import { Box as RadixThemesBox, Button as RadixThemesButton, Flex as RadixThemesFlex, Grid as RadixThemesGrid, IconButton as RadixThemesIconButton, Link as RadixThemesLink, ScrollArea as RadixThemesScrollArea, Select as RadixThemesSelect, Skeleton as RadixThemesSkeleton, Slider as RadixThemesSlider, Spinner as RadixThemesSpinner, Text as RadixThemesText, TextArea as RadixThemesTextArea, TextField as RadixThemesTextField, Tooltip as RadixThemesTooltip } from "@radix-ui/themes"
import NextLink from "next/link"
import { DebounceInput } from "react-debounce-input"
import { ImgComparisonSlider } from "@img-comparison-slider/react"
import Zoom from "react-medium-image-zoom"
import NextHead from "next/head"



export function Link_7cf1c9f6ccb1d11b008d9ed329df0d9c () {
  const { resolvedColorMode } = useContext(ColorModeContext)




  return (
    <RadixThemesLink asChild={true} css={({ ["padding"] : "0", ["&:hover"] : ({ ["color"] : "var(--accent-8)" }) })} target={(true ? "_blank" : "")}>

<NextLink href={"https://reflex.dev"} passHref={true}>

<Fragment>

{isTrue((resolvedColorMode === "light")) ? (
  <Fragment>

<img css={({ ["height"] : "1em", ["width"] : "auto" })} src={"/reflex_black.svg"}/>
</Fragment>
) : (
  <Fragment>

<img css={({ ["height"] : "1em", ["width"] : "auto" })} src={"/reflex_white.svg"}/>
</Fragment>
)}
</Fragment>
</NextLink>
</RadixThemesLink>
  )
}

export function Fragment_9bda26f0fd1ba07490fd7d5a2fb397f2 () {
  const [addEvents, connectErrors] = useContext(EventLoopContext);




  return (
    <Fragment>

{isTrue(refs['_client_state_copying']) ? (
  <Fragment>

<RadixThemesTooltip content={"Copied"} open={refs['_client_state_copying']} side={"top"}>

<RadixThemesIconButton color={"green"} css={({ ["padding"] : "6px", ["cursor"] : "pointer" })} size={"2"} variant={"outline"}>

<LucideClipboardCheckIcon css={({ ["strokeWidth"] : "1.75px", ["color"] : "var(--current-color)" })} size={24}/>
</RadixThemesIconButton>
</RadixThemesTooltip>
</Fragment>
) : (
  <Fragment>

<RadixThemesIconButton color={"gray"} css={({ ["padding"] : "6px", ["cursor"] : "pointer" })} onClick={((...args) => (addEvents([(Event("_call_script", ({ ["javascript_code"] : "\n        refs['_client_state_setCopying'](true);\n        setTimeout(() => {\n            refs['_client_state_setCopying'](false);\n        }, 1750);\n        " }), ({  }))), (Event("reflex___state____state.test___backend___generation____generator_state.copy_image", ({  }), ({  })))], args, ({  }))))} size={"2"} variant={"outline"}>

<LucideClipboardIcon css={({ ["strokeWidth"] : "1.75px", ["color"] : "var(--current-color)" })} size={24}/>
</RadixThemesIconButton>
</Fragment>
)}
</Fragment>
  )
}

export function Scrollarea_92cbf2726cf54f4389b27711122c2335 () {
  const reflex___state____state__test___backend___generation____generator_state = useContext(StateContexts.reflex___state____state__test___backend___generation____generator_state)




  return (
    <RadixThemesScrollArea css={({ ["display"] : (isTrue(reflex___state____state__test___backend___generation____generator_state.output_list) ? "flex" : "none") })} scrollbars={"horizontal"} type={"auto"}>

<Flex_61d830d4d0e0d99010433f687381fb22/>
</RadixThemesScrollArea>
  )
}

export function Text_8b0868af63c4ee1f41d2e0ca269fa13c () {
  const reflex___state____state__test___backend___options____options_state = useContext(StateContexts.reflex___state____state__test___backend___options____options_state)




  return (
    <RadixThemesText as={"p"} size={"3"}>

{reflex___state____state__test___backend___options____options_state.num_outputs}
</RadixThemesText>
  )
}

export function Fragment_d8b60663319908ad59d8671a536c73ca () {
  const reflex___state____state__test___backend___options____options_state = useContext(StateContexts.reflex___state____state__test___backend___options____options_state)
  const [addEvents, connectErrors] = useContext(EventLoopContext);




  return (
    <Fragment>

{isTrue(reflex___state____state__test___backend___options____options_state.advanced_options_open) ? (
  <Fragment>

<RadixThemesFlex align={"start"} className={"rx-Stack"} css={({ ["width"] : "100%" })} direction={"column"} gap={"3"}>

<RadixThemesFlex align={"start"} className={"rx-Stack"} css={({ ["width"] : "100%" })} direction={"column"} gap={"3"}>

<RadixThemesFlex align={"center"} className={"rx-Stack"} css={({ ["width"] : "100%" })} direction={"row"} gap={"2"}>

<LucideTypeIcon css={({ ["strokeWidth"] : "1.75px", ["color"] : "var(--red-9)" })} size={17}/>
<RadixThemesText as={"p"} size={"3"}>

{"Negative Prompt"}
</RadixThemesText>
<RadixThemesTooltip content={"Things you want to avoid in the image"}>

<LucideInfoIcon css={({ ["strokeWidth"] : "1.75px", ["color"] : "var(--gray-10)" })} size={15}/>
</RadixThemesTooltip>
<RadixThemesFlex css={({ ["flex"] : 1, ["justifySelf"] : "stretch", ["alignSelf"] : "stretch" })}/>
<RadixThemesFlex align={"center"} className={"rx-Stack"} direction={"row"} gap={"4"}>

<Fragment>

{isTrue(reflex___state____state__test___backend___options____options_state.negative_prompt) ? (
  <Fragment>

<LucideEraserIcon css={({ ["strokeWidth"] : "1.75px", ["color"] : "var(--gray-10)", ["cursor"] : "pointer", ["&:hover"] : ({ ["opacity"] : "0.8" }) })} onClick={((...args) => (addEvents([(Event("reflex___state____state.test___backend___options____options_state.setvar", ({ ["var_name"] : "negative_prompt", ["value"] : "" }), ({  })))], args, ({  }))))} size={20}/>
</Fragment>
) : (
  <Fragment/>
)}
</Fragment>
</RadixThemesFlex>
</RadixThemesFlex>
<DebounceInput css={({ ["width"] : "100%" })} debounceTimeout={300} element={RadixThemesTextArea} onChange={((_e) => (addEvents([(Event("reflex___state____state.test___backend___options____options_state.set_negative_prompt", ({ ["value"] : _e["target"]["value"] }), ({  })))], [_e], ({  }))))} placeholder={"What do you want to avoid?"} size={"3"} value={reflex___state____state__test___backend___options____options_state.negative_prompt}/>
</RadixThemesFlex>
<RadixThemesGrid align={"center"} columns={"2"} css={({ ["width"] : "100%" })} justify={"between"} rows={"2"} gapX={"5"} gapY={"5"}>

<Fragment>

<RadixThemesFlex align={"start"} className={"rx-Stack"} direction={"column"} gap={"2"}>

<RadixThemesFlex align={"center"} className={"rx-Stack"} css={({ ["width"] : "100%" })} direction={"row"} gap={"2"}>

<LucideSproutIcon css={({ ["strokeWidth"] : "1.75px", ["color"] : "var(--grass-10)" })} size={17}/>
<RadixThemesText as={"p"} size={"3"}>

{"Seed"}
</RadixThemesText>
<RadixThemesFlex css={({ ["flex"] : 1, ["justifySelf"] : "stretch", ["alignSelf"] : "stretch" })}/>
<RadixThemesFlex align={"center"} className={"rx-Stack"} direction={"row"} gap={"4"}>

<Fragment>

{isTrue((reflex___state____state__test___backend___options____options_state.seed > 0)) ? (
  <Fragment>

<LucideEraserIcon css={({ ["strokeWidth"] : "1.75px", ["color"] : "var(--gray-10)", ["cursor"] : "pointer", ["&:hover"] : ({ ["opacity"] : "0.8" }) })} onClick={((...args) => (addEvents([(Event("reflex___state____state.test___backend___options____options_state.setvar", ({ ["var_name"] : "seed", ["value"] : 0 }), ({  })))], args, ({  }))))} size={20}/>
</Fragment>
) : (
  <Fragment/>
)}
</Fragment>
</RadixThemesFlex>
</RadixThemesFlex>
<RadixThemesTooltip content={"A number that determines the randomness of the image. Use the same seed to get the same result every time. 0 = Auto"} side={"right"}>

<RadixThemesBox css={({ ["width"] : "100%" })}>

<DebounceInput css={({ ["width"] : "100%" })} debounceTimeout={300} element={RadixThemesTextField.Root} maxLength={5} onChange={((_e) => (addEvents([(Event("reflex___state____state.test___backend___options____options_state.set_seed", ({ ["value"] : _e["target"]["value"] }), ({  })))], [_e], ({  }))))} placeholder={"0 (Auto)"} type={"number"} value={reflex___state____state__test___backend___options____options_state.seed}/>
</RadixThemesBox>
</RadixThemesTooltip>
</RadixThemesFlex>
</Fragment>
<Fragment>

<RadixThemesFlex align={"start"} className={"rx-Stack"} direction={"column"} gap={"2"}>

<RadixThemesFlex align={"center"} className={"rx-Stack"} css={({ ["width"] : "100%" })} direction={"row"} gap={"2"}>

<LucideFootprintsIcon css={({ ["strokeWidth"] : "1.75px", ["color"] : "var(--purple-10)" })} size={17}/>
<RadixThemesText as={"p"} size={"3"}>

{"Steps"}
</RadixThemesText>
<RadixThemesFlex css={({ ["flex"] : 1, ["justifySelf"] : "stretch", ["alignSelf"] : "stretch" })}/>
<RadixThemesText as={"p"} size={"3"}>

{reflex___state____state__test___backend___options____options_state.steps}
</RadixThemesText>
</RadixThemesFlex>
<RadixThemesTooltip content={"Number of denoising steps. 4 for best results. (minimum: 1, maximum: 10)"} side={"right"}>

<RadixThemesBox css={({ ["width"] : "100%" })}>

<RadixThemesSlider css={({ ["width"] : "100%" })} defaultValue={[reflex___state____state__test___backend___options____options_state.steps]} max={10} min={1} onValueChange={((_ev_0) => (addEvents([(Event("reflex___state____state.test___backend___options____options_state.set_steps", ({ ["value"] : _ev_0 }), ({  })))], [_ev_0], ({  }))))} size={"1"} step={1} width={"100%"}/>
</RadixThemesBox>
</RadixThemesTooltip>
</RadixThemesFlex>
</Fragment>
<Fragment>

<RadixThemesFlex align={"start"} className={"rx-Stack"} direction={"column"} gap={"2"}>

<RadixThemesFlex align={"center"} className={"rx-Stack"} css={({ ["width"] : "100%" })} direction={"row"} gap={"2"}>

<LucideAlignLeftIcon css={({ ["strokeWidth"] : "1.75px", ["color"] : "var(--iris-10)" })} size={17}/>
<RadixThemesText as={"p"} size={"3"}>

{"Scheduler"}
</RadixThemesText>
</RadixThemesFlex>
<RadixThemesTooltip content={"Schedulers guide the process of removing noise from the image"} side={"right"}>

<RadixThemesBox css={({ ["width"] : "100%" })}>

<RadixThemesSelect.Root onValueChange={((_ev_0) => (addEvents([(Event("reflex___state____state.test___backend___options____options_state.set_scheduler", ({ ["value"] : _ev_0 }), ({  })))], [_ev_0], ({  }))))} value={reflex___state____state__test___backend___options____options_state.scheduler}>

<RadixThemesSelect.Trigger css={({ ["width"] : "100%" })}/>
<RadixThemesSelect.Content>

<RadixThemesSelect.Group>

{""}
<RadixThemesSelect.Item value={"DDIM"}>

{"DDIM"}
</RadixThemesSelect.Item>
<RadixThemesSelect.Item value={"DPMSolverMultistep"}>

{"DPMSolverMultistep"}
</RadixThemesSelect.Item>
<RadixThemesSelect.Item value={"HeunDiscrete"}>

{"HeunDiscrete"}
</RadixThemesSelect.Item>
<RadixThemesSelect.Item value={"KarrasDPM"}>

{"KarrasDPM"}
</RadixThemesSelect.Item>
<RadixThemesSelect.Item value={"K_EULER_ANCESTRAL"}>

{"K_EULER_ANCESTRAL"}
</RadixThemesSelect.Item>
<RadixThemesSelect.Item value={"K_EULER"}>

{"K_EULER"}
</RadixThemesSelect.Item>
<RadixThemesSelect.Item value={"PNDM"}>

{"PNDM"}
</RadixThemesSelect.Item>
<RadixThemesSelect.Item value={"DPM++2MSDE"}>

{"DPM++2MSDE"}
</RadixThemesSelect.Item>
</RadixThemesSelect.Group>
</RadixThemesSelect.Content>
</RadixThemesSelect.Root>
</RadixThemesBox>
</RadixThemesTooltip>
</RadixThemesFlex>
</Fragment>
<Fragment>

<RadixThemesFlex align={"start"} className={"rx-Stack"} direction={"column"} gap={"2"}>

<RadixThemesFlex align={"center"} className={"rx-Stack"} css={({ ["width"] : "100%" })} direction={"row"} gap={"2"}>

<LucideScaleIcon css={({ ["strokeWidth"] : "1.75px", ["color"] : "var(--cyan-10)" })} size={17}/>
<RadixThemesText as={"p"} size={"3"}>

{"Guidance Scale"}
</RadixThemesText>
<RadixThemesFlex css={({ ["flex"] : 1, ["justifySelf"] : "stretch", ["alignSelf"] : "stretch" })}/>
<RadixThemesText as={"p"} size={"3"}>

{reflex___state____state__test___backend___options____options_state.guidance_scale}
</RadixThemesText>
</RadixThemesFlex>
<RadixThemesTooltip content={"Controls the strength of the promptguidance. Recommended 0. (minimum: 0, maximum: 50)"} side={"right"}>

<RadixThemesBox css={({ ["width"] : "100%" })}>

<RadixThemesSlider css={({ ["width"] : "100%" })} defaultValue={[reflex___state____state__test___backend___options____options_state.guidance_scale]} max={50} min={0} onValueChange={((_ev_0) => (addEvents([(Event("reflex___state____state.test___backend___options____options_state.set_guidance_scale", ({ ["value"] : _ev_0 }), ({  })))], [_ev_0], ({  }))))} size={"1"} step={0.01} width={"100%"}/>
</RadixThemesBox>
</RadixThemesTooltip>
</RadixThemesFlex>
</Fragment>
</RadixThemesGrid>
</RadixThemesFlex>
</Fragment>
) : (
  <Fragment/>
)}
</Fragment>
  )
}

export function Flex_663eabfbde78cbfc52c0e0f5c4caeae0 () {
  const reflex___state____state__test___backend___options____options_state = useContext(StateContexts.reflex___state____state__test___backend___options____options_state)
  const [addEvents, connectErrors] = useContext(EventLoopContext);




  return (
    <RadixThemesFlex align={"center"} className={"rx-Stack"} css={({ ["width"] : "100%", ["paddingBottom"] : "15px" })} direction={"row"} gap={"3"}>

<>{Object.entries(reflex___state____state__test___backend___options____options_state.styles_preset).map((style_preset, index_eb886b3cdab2e812) => (
  <Fragment key={index_eb886b3cdab2e812}>

{isTrue((style_preset.at(0) === reflex___state____state__test___backend___options____options_state.selected_style)) ? (
  <Fragment>

<RadixThemesTooltip content={style_preset.at(0)}>

<RadixThemesBox css={({ ["width"] : "110px", ["height"] : "auto", ["cursor"] : "pointer", ["background"] : "var(--accent-9)" })} onClick={((...args) => (addEvents([(Event("reflex___state____state.test___backend___options____options_state.setvar", ({ ["var_name"] : "selected_style", ["value"] : "" }), ({  })))], args, ({  }))))}>

<img css={({ ["transform"] : "scale(0.875)", ["width"] : "100%", ["height"] : "auto", ["transition"] : "all 0.2s ease" })} decoding={"async"} loading={"lazy"} src={style_preset.at(1)["path"]}/>
</RadixThemesBox>
</RadixThemesTooltip>
</Fragment>
) : (
  <Fragment>

<RadixThemesTooltip content={style_preset.at(0)}>

<RadixThemesBox css={({ ["width"] : "110px", ["height"] : "auto", ["cursor"] : "pointer", ["background"] : "var(--accent-9)" })} onClick={((...args) => (addEvents([(Event("reflex___state____state.test___backend___options____options_state.setvar", ({ ["var_name"] : "selected_style", ["value"] : style_preset.at(0) }), ({  })))], args, ({  }))))}>

<img css={({ ["width"] : "100%", ["height"] : "auto", ["transition"] : "all 0.2s ease" })} decoding={"auto"} loading={"lazy"} src={style_preset.at(1)["path"]}/>
</RadixThemesBox>
</RadixThemesTooltip>
</Fragment>
)}
</Fragment>
))}</>
</RadixThemesFlex>
  )
}

export function Fragment_135d3d84978f6f4fe02f3180d683824f () {
  const reflex___state____state__test___backend___generation____generator_state = useContext(StateContexts.reflex___state____state__test___backend___generation____generator_state)
  const [addEvents, connectErrors] = useContext(EventLoopContext);




  return (
    <Fragment>

{isTrue(!(reflex___state____state__test___backend___generation____generator_state.is_upscaling)) ? (
  <Fragment>

<RadixThemesButton css={({ ["cursor"] : "pointer" })} onClick={((...args) => (addEvents([(Event("reflex___state____state.test___backend___generation____generator_state.upscale_image", ({  }), ({  })))], args, ({  }))))} size={"2"} variant={"outline"}>

<LucideScalingIcon css={({ ["strokeWidth"] : "1.75px", ["color"] : "var(--current-color)" })} size={20}/>
{"Upscale"}
</RadixThemesButton>
</Fragment>
) : (
  <Fragment>

<RadixThemesButton color={"tomato"} css={({ ["cursor"] : "pointer" })} onClick={((...args) => (addEvents([(Event("reflex___state____state.test___backend___generation____generator_state.cancel_generation", ({  }), ({  })))], args, ({  }))))} size={"2"} variant={"outline"}>

<RadixThemesSpinner size={"3"}/>
{"Cancel"}
</RadixThemesButton>
</Fragment>
)}
</Fragment>
  )
}

export function Text_c75bec73375c055bed27e6e0dce56b92 () {
  const reflex___state____state__test___backend___options____options_state = useContext(StateContexts.reflex___state____state__test___backend___options____options_state)




  return (
    <RadixThemesText as={"p"} css={({ ["transition"] : "opacity 0.15s ease-out, visibility 0.15s ease-out", ["visibility"] : (reflex___state____state__test___backend___options____options_state.hover ? "hidden" : "visible"), ["opacity"] : (reflex___state____state__test___backend___options____options_state.hover ? "0" : "1") })} size={"2"}>

{reflex___state____state__test___backend___options____options_state.dimensions_str}
</RadixThemesText>
  )
}

export function Debounceinput_350d93a438ffc9d60f8a89d5f26e5ec8 () {
  const reflex___state____state__test___backend___options____options_state = useContext(StateContexts.reflex___state____state__test___backend___options____options_state)
  const [addEvents, connectErrors] = useContext(EventLoopContext);


  const on_change_4d2ee2a7462578e7f59cdf2150e770d6 = useCallback(((_e) => (addEvents([(Event("reflex___state____state.test___backend___options____options_state.set_prompt", ({ ["value"] : _e["target"]["value"] }), ({  })))], [_e], ({  })))), [addEvents, Event])


  return (
    <DebounceInput css={({ ["width"] : "100%" })} debounceTimeout={300} element={RadixThemesTextArea} onChange={on_change_4d2ee2a7462578e7f59cdf2150e770d6} placeholder={"What do you want to see?"} size={"3"} value={reflex___state____state__test___backend___options____options_state.prompt}/>
  )
}

export function Fragment_a8d039c295d74776b8e2c617c1264707 () {
  const reflex___state____state__test___backend___generation____generator_state = useContext(StateContexts.reflex___state____state__test___backend___generation____generator_state)




  return (
    <Fragment>

{isTrue((reflex___state____state__test___backend___generation____generator_state.upscaled_image && !(reflex___state____state__test___backend___generation____generator_state.is_generating))) ? (
  <Fragment>

<ImgComparisonSlider direction={"horizontal"} handle={false} hover={false} keyboard={"enabled"} value={50}>

<img css={({ ["width"] : "100%", ["@media screen and (min-width: 0)"] : ({ ["height"] : "400px" }), ["@media screen and (min-width: 30em)"] : ({ ["height"] : "500px" }), ["@media screen and (min-width: 48em)"] : ({ ["height"] : "650px" }), ["@media screen and (min-width: 62em)"] : ({ ["height"] : "850px" }) })} slot={"first"} src={reflex___state____state__test___backend___generation____generator_state.output_image}/>
<img css={({ ["width"] : "100%", ["@media screen and (min-width: 0)"] : ({ ["height"] : "400px" }), ["@media screen and (min-width: 30em)"] : ({ ["height"] : "500px" }), ["@media screen and (min-width: 48em)"] : ({ ["height"] : "650px" }), ["@media screen and (min-width: 62em)"] : ({ ["height"] : "850px" }) })} slot={"second"} src={reflex___state____state__test___backend___generation____generator_state.upscaled_image}/>
</ImgComparisonSlider>
</Fragment>
) : (
  <Fragment>

{isTrue((!(reflex___state____state__test___backend___generation____generator_state.is_generating) && !(reflex___state____state__test___backend___generation____generator_state.is_upscaling))) ? (
  <Fragment>

<Zoom>

<img css={({ ["width"] : "100%", ["@media screen and (min-width: 0)"] : ({ ["height"] : "400px" }), ["@media screen and (min-width: 30em)"] : ({ ["height"] : "500px" }), ["@media screen and (min-width: 48em)"] : ({ ["height"] : "650px" }), ["@media screen and (min-width: 62em)"] : ({ ["height"] : "850px" }) })} src={reflex___state____state__test___backend___generation____generator_state.output_image}/>
</Zoom>
</Fragment>
) : (
  <Fragment>

<RadixThemesSkeleton loading={(reflex___state____state__test___backend___generation____generator_state.is_generating || reflex___state____state__test___backend___generation____generator_state.is_upscaling)}>

<RadixThemesBox>

<img css={({ ["width"] : "100%", ["@media screen and (min-width: 0)"] : ({ ["height"] : "400px" }), ["@media screen and (min-width: 30em)"] : ({ ["height"] : "500px" }), ["@media screen and (min-width: 48em)"] : ({ ["height"] : "650px" }), ["@media screen and (min-width: 62em)"] : ({ ["height"] : "850px" }) })} src={reflex___state____state__test___backend___generation____generator_state.output_image}/>
</RadixThemesBox>
</RadixThemesSkeleton>
</Fragment>
)}
</Fragment>
)}
</Fragment>
  )
}

export function Div_602c14884fa2de27f522fe8f94374b02 () {
  const [addEvents, connectErrors] = useContext(EventLoopContext);




  return (
    <div css={({ ["position"] : "fixed", ["width"] : "100vw", ["height"] : "0" })} title={("Connection Error: "+((connectErrors.length > 0) ? connectErrors[connectErrors.length - 1].message : ''))}>

<Fragment_f2f0916d2fcc08b7cdf76cec697f0750/>
</div>
  )
}

export function Slider_9ba3ad78e12e10deecab9032543097c8 () {
  const reflex___state____state__test___backend___options____options_state = useContext(StateContexts.reflex___state____state__test___backend___options____options_state)
  const [addEvents, connectErrors] = useContext(EventLoopContext);


  const on_change_11efdb202fae708448d61ac6f8a8e6c3 = useCallback(((_ev_0) => (addEvents([(Event("reflex___state____state.test___backend___options____options_state.set_num_outputs", ({ ["value"] : _ev_0 }), ({  })))], [_ev_0], ({  })))), [addEvents, Event])


  return (
    <RadixThemesSlider css={({ ["width"] : "100%" })} defaultValue={[reflex___state____state__test___backend___options____options_state.num_outputs]} max={4} min={1} onValueChange={on_change_11efdb202fae708448d61ac6f8a8e6c3} size={"1"} step={1} width={"100%"}/>
  )
}

const pulse = keyframes`
    0% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
`


export function Fragment_14e751f8f8713781a85d0a57c03bdf3e () {
  const reflex___state____state__test___backend___options____options_state = useContext(StateContexts.reflex___state____state__test___backend___options____options_state)
  const [addEvents, connectErrors] = useContext(EventLoopContext);




  return (
    <Fragment>

{isTrue(reflex___state____state__test___backend___options____options_state.selected_style) ? (
  <Fragment>

<RadixThemesFlex align={"center"} className={"rx-Stack"} direction={"row"} gap={"4"}>

<RadixThemesText as={"p"} size={"3"}>

{("[ "+reflex___state____state__test___backend___options____options_state.selected_style+" ]")}
</RadixThemesText>
<LucideEraserIcon css={({ ["strokeWidth"] : "1.75px", ["color"] : "var(--gray-10)", ["cursor"] : "pointer", ["&:hover"] : ({ ["opacity"] : "0.8" }) })} onClick={((...args) => (addEvents([(Event("reflex___state____state.test___backend___options____options_state.setvar", ({ ["var_name"] : "selected_style", ["value"] : "" }), ({  })))], args, ({  }))))} size={20}/>
</RadixThemesFlex>
</Fragment>
) : (
  <Fragment/>
)}
</Fragment>
  )
}

export function Fragment_95488fc95f5e0d8a41f935e587770677 () {
  const reflex___state____state__test___backend___options____options_state = useContext(StateContexts.reflex___state____state__test___backend___options____options_state)
  const [addEvents, connectErrors] = useContext(EventLoopContext);




  return (
    <Fragment>

{isTrue(reflex___state____state__test___backend___options____options_state.advanced_options_open) ? (
  <Fragment>

<RadixThemesFlex align={"center"} className={"rx-Stack"} css={({ ["width"] : "100%", ["cursor"] : "pointer", ["&:hover"] : ({ ["opacity"] : "0.8" }) })} direction={"row"} onClick={((...args) => (addEvents([(Event("reflex___state____state.test___backend___options____options_state.setvar", ({ ["var_name"] : "advanced_options_open", ["value"] : false }), ({  })))], args, ({  }))))} gap={"2"}>

<LucideEyeIcon css={({ ["strokeWidth"] : "1.75px", ["color"] : "var(--jade-10)" })} size={17}/>
<RadixThemesText as={"p"} size={"3"}>

{"Advanced Options"}
</RadixThemesText>
</RadixThemesFlex>
</Fragment>
) : (
  <Fragment>

<RadixThemesFlex align={"center"} className={"rx-Stack"} css={({ ["width"] : "100%", ["cursor"] : "pointer", ["&:hover"] : ({ ["opacity"] : "0.8" }) })} direction={"row"} onClick={((...args) => (addEvents([(Event("reflex___state____state.test___backend___options____options_state.setvar", ({ ["var_name"] : "advanced_options_open", ["value"] : true }), ({  })))], args, ({  }))))} gap={"2"}>

<LucideEyeOffIcon css={({ ["strokeWidth"] : "1.75px", ["color"] : "var(--jade-10)" })} size={17}/>
<RadixThemesText as={"p"} size={"3"}>

{"Advanced Options"}
</RadixThemesText>
</RadixThemesFlex>
</Fragment>
)}
</Fragment>
  )
}

export function Fragment_35a4be9751b0edd45efd1d55cec20d08 () {
  const reflex___state____state__test___backend___generation____generator_state = useContext(StateContexts.reflex___state____state__test___backend___generation____generator_state)
  const [addEvents, connectErrors] = useContext(EventLoopContext);




  return (
    <Fragment>

{isTrue(reflex___state____state__test___backend___generation____generator_state.is_downloading) ? (
  <Fragment>

<RadixThemesIconButton color={"blue"} css={({ ["padding"] : "6px", ["cursor"] : "pointer" })} size={"2"} variant={"outline"}>

<RadixThemesSpinner size={24}/>
</RadixThemesIconButton>
</Fragment>
) : (
  <Fragment>

<RadixThemesIconButton color={"gray"} css={({ ["padding"] : "6px", ["cursor"] : "pointer" })} onClick={((...args) => (addEvents([(Event("reflex___state____state.test___backend___generation____generator_state.download_image", ({  }), ({  })))], args, ({  }))))} size={"2"} variant={"outline"}>

<LucideDownloadIcon css={({ ["strokeWidth"] : "1.75px", ["color"] : "var(--current-color)" })} size={24}/>
</RadixThemesIconButton>
</Fragment>
)}
</Fragment>
  )
}

export function Dicesicon_da36a30ee7411ca322413f564c884791 () {
  const [addEvents, connectErrors] = useContext(EventLoopContext);


  const on_click_d6a4e352f328897a3624303c420524e2 = useCallback(((...args) => (addEvents([(Event("reflex___state____state.test___backend___options____options_state.randomize_prompt", ({  }), ({  })))], args, ({  })))), [addEvents, Event])


  return (
    <LucideDicesIcon css={({ ["strokeWidth"] : "1.75px", ["color"] : "var(--gray-10)", ["cursor"] : "pointer", ["&:hover"] : ({ ["opacity"] : "0.8" }) })} onClick={on_click_d6a4e352f328897a3624303c420524e2} size={20}/>
  )
}

export function Fragment_f2f0916d2fcc08b7cdf76cec697f0750 () {
  const [addEvents, connectErrors] = useContext(EventLoopContext);




  return (
    <Fragment>

{isTrue((connectErrors.length > 0)) ? (
  <Fragment>

<LucideWifiOffIcon css={({ ["color"] : "crimson", ["zIndex"] : 9999, ["position"] : "fixed", ["bottom"] : "33px", ["right"] : "33px", ["animation"] : (pulse+" 1s infinite") })} size={32}/>
</Fragment>
) : (
  <Fragment/>
)}
</Fragment>
  )
}

export function Flex_243d7193ff7caa93e903f868fb33c769 () {
  const reflex___state____state__test___backend___options____options_state = useContext(StateContexts.reflex___state____state__test___backend___options____options_state)




  return (
    <RadixThemesFlex css={({ ["display"] : "flex", ["alignItems"] : "center", ["justifyContent"] : "center", ["position"] : "absolute", ["transform"] : "translate(0%, 45%)", ["width"] : "100%", ["zIndex"] : (reflex___state____state__test___backend___options____options_state.hover ? "500" : "0") })}>

<Flex_c6b249cd761263e078d374b24f2020b7/>
</RadixThemesFlex>
  )
}

export function Fragment_6e2229589ec76a52b7b1c9d71e50ed9d () {
  const reflex___state____state__test___backend___options____options_state = useContext(StateContexts.reflex___state____state__test___backend___options____options_state)
  const [addEvents, connectErrors] = useContext(EventLoopContext);




  return (
    <Fragment>

{isTrue(reflex___state____state__test___backend___options____options_state.prompt) ? (
  <Fragment>

<LucideEraserIcon css={({ ["strokeWidth"] : "1.75px", ["color"] : "var(--gray-10)", ["cursor"] : "pointer", ["&:hover"] : ({ ["opacity"] : "0.8" }) })} onClick={((...args) => (addEvents([(Event("reflex___state____state.test___backend___options____options_state.setvar", ({ ["var_name"] : "prompt", ["value"] : "" }), ({  })))], args, ({  }))))} size={20}/>
</Fragment>
) : (
  <Fragment/>
)}
</Fragment>
  )
}

export function Flex_61d830d4d0e0d99010433f687381fb22 () {
  const reflex___state____state__test___backend___generation____generator_state = useContext(StateContexts.reflex___state____state__test___backend___generation____generator_state)
  const [addEvents, connectErrors] = useContext(EventLoopContext);




  return (
    <RadixThemesFlex align={"center"} className={"rx-Stack"} css={({ ["width"] : "100%" })} direction={"row"} gap={"4"}>

<>{reflex___state____state__test___backend___generation____generator_state.output_list.map((image, index_ed838a5495c037cd) => (
  <RadixThemesSkeleton key={index_ed838a5495c037cd} loading={(reflex___state____state__test___backend___generation____generator_state.is_generating || reflex___state____state__test___backend___generation____generator_state.is_upscaling)}>

<RadixThemesBox css={({ ["width"] : "auto", ["aspectRatio"] : "1/1", ["maxHeight"] : "5em", ["maxWidth"] : "5em", ["cursor"] : "pointer", ["background"] : "var(--accent-9)" })} onClick={((...args) => (addEvents([(Event("reflex___state____state.test___backend___generation____generator_state.setvar", ({ ["var_name"] : "output_image", ["value"] : image }), ({  })))], args, ({  }))))}>

<img alt={"Output image option"} css={({ ["transform"] : ((image === reflex___state____state__test___backend___generation____generator_state.output_image) ? "scale(0.875)" : ""), ["filter"] : ((image === reflex___state____state__test___backend___generation____generator_state.output_image) ? "" : "brightness(.75)"), ["width"] : "100%", ["height"] : "100%", ["transition"] : "all 0.2s ease", ["objectFit"] : "cover" })} decoding={"auto"} loading={"lazy"} src={image}/>
</RadixThemesBox>
</RadixThemesSkeleton>
))}</>
</RadixThemesFlex>
  )
}

export function Text_01ca41e9a610a297406d990682e371a6 () {
  const reflex___state____state__test___backend___options____options_state = useContext(StateContexts.reflex___state____state__test___backend___options____options_state)




  return (
    <RadixThemesText align={"center"} as={"p"} css={({ ["justify"] : "center" })} size={"2"}>

{reflex___state____state__test___backend___options____options_state.dimensions_str}
</RadixThemesText>
  )
}

export function Iconbutton_5caf89a6a1c9b5724159d367a21ffbf5 () {
  const { toggleColorMode } = useContext(ColorModeContext)
  const [addEvents, connectErrors] = useContext(EventLoopContext);


  const on_click_9922dd3e837b9e087c86a2522c2c93f8 = useCallback(toggleColorMode, [addEvents, Event, toggleColorMode])


  return (
    <RadixThemesIconButton css={({ ["padding"] : "0", ["height"] : "1.25em", ["width"] : "1.25em", ["background"] : "transparent", ["color"] : "inherit", ["zIndex"] : "20", ["&:hover"] : ({ ["cursor"] : "pointer" }) })} onClick={on_click_9922dd3e837b9e087c86a2522c2c93f8}>

<Fragment_63445d99e19e7aab365f9ab7fee74a8f/>
</RadixThemesIconButton>
  )
}

export function Flex_c6b249cd761263e078d374b24f2020b7 () {
  const reflex___state____state__test___backend___options____options_state = useContext(StateContexts.reflex___state____state__test___backend___options____options_state)




  return (
    <RadixThemesFlex align={"center"} css={({ ["transition"] : "all 0.1s ease", ["opacity"] : (reflex___state____state__test___backend___options____options_state.hover ? "1" : "0"), ["visibility"] : (reflex___state____state__test___backend___options____options_state.hover ? "visible" : "hidden"), ["transform"] : (reflex___state____state__test___backend___options____options_state.hover ? "scale(1)" : "scale(0)"), ["width"] : Math.floor(reflex___state____state__test___backend___options____options_state.dimensions.at(reflex___state____state__test___backend___options____options_state.slider_tick).at(0) / 8), ["height"] : Math.floor(reflex___state____state__test___backend___options____options_state.dimensions.at(reflex___state____state__test___backend___options____options_state.slider_tick).at(1) / 8), ["background"] : "var(--gray-7)", ["padding"] : "2.5px", ["position"] : "relative", ["border"] : "1.5px solid var(--gray-9)", ["boxShadow"] : "0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)" })} justify={"center"}>

<Text_01ca41e9a610a297406d990682e371a6/>
<LucideArrowUpLeftIcon css={({ ["strokeWidth"] : "1.75px", ["color"] : "var(--gray-10)", ["position"] : "absolute", ["top"] : "2.5px", ["left"] : "2.5px", ["right"] : "", ["bottom"] : "" })} size={17}/>
<LucideArrowUpRightIcon css={({ ["strokeWidth"] : "1.75px", ["color"] : "var(--gray-10)", ["position"] : "absolute", ["top"] : "2.5px", ["left"] : "", ["right"] : "2.5px", ["bottom"] : "" })} size={17}/>
<LucideArrowDownLeftIcon css={({ ["strokeWidth"] : "1.75px", ["color"] : "var(--gray-10)", ["position"] : "absolute", ["top"] : "", ["left"] : "2.5px", ["right"] : "", ["bottom"] : "2.5px" })} size={17}/>
<LucideArrowDownRightIcon css={({ ["strokeWidth"] : "1.75px", ["color"] : "var(--gray-10)", ["position"] : "absolute", ["top"] : "", ["left"] : "", ["right"] : "2.5px", ["bottom"] : "2.5px" })} size={17}/>
</RadixThemesFlex>
  )
}

export function Slider_14e3b1f99b30651700bafb1a65059ea7 () {
  const reflex___state____state__test___backend___options____options_state = useContext(StateContexts.reflex___state____state__test___backend___options____options_state)
  const [addEvents, connectErrors] = useContext(EventLoopContext);


  const on_change_0d474463854ecf79d1d810882621d232 = useCallback(((_ev_0) => (addEvents([(Event("reflex___state____state.test___backend___options____options_state.set_tick", ({ ["value"] : _ev_0 }), ({  })))], [_ev_0], ({  })))), [addEvents, Event])
  const on_blur_3dc546645ab01a82bc52b82ca715a1df = useCallback(((...args) => (addEvents([(Event("reflex___state____state.test___backend___options____options_state.set_hover", ({ ["value"] : false }), ({  })))], args, ({  })))), [addEvents, Event])
  const on_mouse_enter_a357258e2980e0d382e6f5ddd59c6e7c = useCallback(((...args) => (addEvents([(Event("reflex___state____state.test___backend___options____options_state.set_hover", ({ ["value"] : true }), ({  })))], args, ({  })))), [addEvents, Event])
  const on_mouse_leave_3dc546645ab01a82bc52b82ca715a1df = useCallback(((...args) => (addEvents([(Event("reflex___state____state.test___backend___options____options_state.set_hover", ({ ["value"] : false }), ({  })))], args, ({  })))), [addEvents, Event])


  return (
    <RadixThemesSlider css={({ ["width"] : "100%" })} defaultValue={[reflex___state____state__test___backend___options____options_state.slider_tick]} max={(reflex___state____state__test___backend___options____options_state.dimensions.length - 1)} min={0} onBlur={on_blur_3dc546645ab01a82bc52b82ca715a1df} onValueChange={on_change_0d474463854ecf79d1d810882621d232} onMouseEnter={on_mouse_enter_a357258e2980e0d382e6f5ddd59c6e7c} onMouseLeave={on_mouse_leave_3dc546645ab01a82bc52b82ca715a1df} size={"1"} step={1} width={"100%"}/>
  )
}

export function Link_d28e69e60481b49151438b12473f17ff () {
  const { resolvedColorMode } = useContext(ColorModeContext)




  return (
    <RadixThemesLink asChild={true} css={({ ["padding"] : "0", ["&:hover"] : ({ ["color"] : "var(--accent-8)" }) })} target={(true ? "_blank" : "")}>

<NextLink href={"https://reflex.dev"} passHref={true}>

<Fragment>

{isTrue((resolvedColorMode === "light")) ? (
  <Fragment>

<img css={({ ["height"] : "1.15em", ["width"] : "auto" })} src={"/reflex_black.svg"}/>
</Fragment>
) : (
  <Fragment>

<img css={({ ["height"] : "1.15em", ["width"] : "auto" })} src={"/reflex_white.svg"}/>
</Fragment>
)}
</Fragment>
</NextLink>
</RadixThemesLink>
  )
}

export function Iconbutton_dd0e3fe5b612a2724a3c15d194346635 () {
  const { toggleColorMode } = useContext(ColorModeContext)
  const [addEvents, connectErrors] = useContext(EventLoopContext);


  const on_click_9922dd3e837b9e087c86a2522c2c93f8 = useCallback(toggleColorMode, [addEvents, Event, toggleColorMode])


  return (
    <RadixThemesIconButton css={({ ["padding"] : "0", ["height"] : "1.15em", ["width"] : "1.15em", ["background"] : "transparent", ["color"] : "inherit", ["zIndex"] : "20", ["&:hover"] : ({ ["cursor"] : "pointer" }) })} onClick={on_click_9922dd3e837b9e087c86a2522c2c93f8}>

<Fragment_63445d99e19e7aab365f9ab7fee74a8f/>
</RadixThemesIconButton>
  )
}

export function Fragment_63445d99e19e7aab365f9ab7fee74a8f () {
  const { resolvedColorMode } = useContext(ColorModeContext)




  return (
    <Fragment>

{isTrue((resolvedColorMode === "light")) ? (
  <Fragment>

<LucideSunIcon css={({ ["strokeWidth"] : "1.75px", ["color"] : "var(--current-color)" })}/>
</Fragment>
) : (
  <Fragment>

<LucideMoonIcon css={({ ["strokeWidth"] : "1.75px", ["color"] : "var(--current-color)" })}/>
</Fragment>
)}
</Fragment>
  )
}

export function Fragment_feaf4c1238c272df3ce5c1aa48fa6c02 () {
  const reflex___state____state__test___backend___generation____generator_state = useContext(StateContexts.reflex___state____state__test___backend___generation____generator_state)
  const [addEvents, connectErrors] = useContext(EventLoopContext);




  return (
    <Fragment>

{isTrue(!(reflex___state____state__test___backend___generation____generator_state.is_generating)) ? (
  <Fragment>

<RadixThemesButton css={({ ["cursor"] : "pointer", ["width"] : "100%" })} onClick={((...args) => (addEvents([(Event("reflex___state____state.test___backend___generation____generator_state.generate_image", ({  }), ({  })))], args, ({  }))))} size={"3"}>

<LucideSparklesIcon css={({ ["strokeWidth"] : "1.75px", ["color"] : "var(--current-color)" })} size={18}/>
{"Generate"}
</RadixThemesButton>
</Fragment>
) : (
  <Fragment>

<RadixThemesButton color={"tomato"} css={({ ["width"] : "100%", ["cursor"] : "pointer" })} onClick={((...args) => (addEvents([(Event("reflex___state____state.test___backend___generation____generator_state.cancel_generation", ({  }), ({  })))], args, ({  }))))} size={"3"}>

<RadixThemesSpinner size={"3"}/>
{"Cancel"}
</RadixThemesButton>
</Fragment>
)}
</Fragment>
  )
}

export function Errorboundary_198f73c8e7bc8fbec5781502992101b3 () {
  const [addEvents, connectErrors] = useContext(EventLoopContext);


  const on_error_0f5dbf674521530422d73a7946faf6d4 = useCallback(((_error, _info) => (addEvents([(Event("reflex___state____state.reflex___state____frontend_event_exception_state.handle_frontend_exception", ({ ["stack"] : _error["stack"], ["component_stack"] : _info["componentStack"] }), ({  })))], [_error, _info], ({  })))), [addEvents, Event])


  return (
    <ErrorBoundary fallbackRender={((event_args) => (jsx("div", ({ ["css"] : ({ ["height"] : "100%", ["width"] : "100%", ["position"] : "absolute", ["display"] : "flex", ["alignItems"] : "center", ["justifyContent"] : "center" }) }), (jsx("div", ({ ["css"] : ({ ["display"] : "flex", ["flexDirection"] : "column", ["gap"] : "1rem" }) }), (jsx("div", ({ ["css"] : ({ ["display"] : "flex", ["flexDirection"] : "column", ["gap"] : "1rem", ["maxWidth"] : "50ch", ["border"] : "1px solid #888888", ["borderRadius"] : "0.25rem", ["padding"] : "1rem" }) }), (jsx("h2", ({ ["css"] : ({ ["fontSize"] : "1.25rem", ["fontWeight"] : "bold" }) }), (jsx(Fragment, ({  }), "An error occurred while rendering this page.")))), (jsx("p", ({ ["css"] : ({ ["opacity"] : "0.75" }) }), (jsx(Fragment, ({  }), "This is an error with the application itself.")))), (jsx("details", ({  }), (jsx("summary", ({ ["css"] : ({ ["padding"] : "0.5rem" }) }), (jsx(Fragment, ({  }), "Error message")))), (jsx("div", ({ ["css"] : ({ ["width"] : "100%", ["maxHeight"] : "50vh", ["overflow"] : "auto", ["background"] : "#000", ["color"] : "#fff", ["borderRadius"] : "0.25rem" }) }), (jsx("div", ({ ["css"] : ({ ["padding"] : "0.5rem", ["width"] : "fit-content" }) }), (jsx("pre", ({  }), (jsx(Fragment, ({  }), event_args.error.stack)))))))), (jsx("button", ({ ["css"] : ({ ["padding"] : "0.35rem 0.75rem", ["margin"] : "0.5rem", ["background"] : "#fff", ["color"] : "#000", ["border"] : "1px solid #000", ["borderRadius"] : "0.25rem", ["fontWeight"] : "bold" }), ["onClick"] : ((...args) => (addEvents([(Event("_call_function", ({ ["function"] : (() => (navigator["clipboard"]["writeText"](event_args.error.stack))) }), ({  })))], args, ({  })))) }), (jsx(Fragment, ({  }), "Copy")))))))), (jsx("hr", ({ ["css"] : ({ ["borderColor"] : "currentColor", ["opacity"] : "0.25" }) }))), (jsx("a", ({ ["href"] : "https://reflex.dev" }), (jsx("div", ({ ["css"] : ({ ["display"] : "flex", ["alignItems"] : "baseline", ["justifyContent"] : "center", ["fontFamily"] : "monospace", ["--default-font-family"] : "monospace", ["gap"] : "0.5rem" }) }), (jsx(Fragment, ({  }), "Built with ")), (jsx("svg", ({ ["css"] : ({ ["viewBox"] : "0 0 56 12", ["fill"] : "currentColor" }), ["height"] : "12", ["width"] : "56", ["xmlns"] : "http://www.w3.org/2000/svg" }), (jsx("path", ({ ["d"] : "M0 11.5999V0.399902H8.96V4.8799H6.72V2.6399H2.24V4.8799H6.72V7.1199H2.24V11.5999H0ZM6.72 11.5999V7.1199H8.96V11.5999H6.72Z" }))), (jsx("path", ({ ["d"] : "M11.2 11.5999V0.399902H17.92V2.6399H13.44V4.8799H17.92V7.1199H13.44V9.3599H17.92V11.5999H11.2Z" }))), (jsx("path", ({ ["d"] : "M20.16 11.5999V0.399902H26.88V2.6399H22.4V4.8799H26.88V7.1199H22.4V11.5999H20.16Z" }))), (jsx("path", ({ ["d"] : "M29.12 11.5999V0.399902H31.36V9.3599H35.84V11.5999H29.12Z" }))), (jsx("path", ({ ["d"] : "M38.08 11.5999V0.399902H44.8V2.6399H40.32V4.8799H44.8V7.1199H40.32V9.3599H44.8V11.5999H38.08Z" }))), (jsx("path", ({ ["d"] : "M47.04 4.8799V0.399902H49.28V4.8799H47.04ZM53.76 4.8799V0.399902H56V4.8799H53.76ZM49.28 7.1199V4.8799H53.76V7.1199H49.28ZM47.04 11.5999V7.1199H49.28V11.5999H47.04ZM53.76 11.5999V7.1199H56V11.5999H53.76Z" }))))))))))))))} onError={on_error_0f5dbf674521530422d73a7946faf6d4}>

<Fragment>

<Div_602c14884fa2de27f522fe8f94374b02/>
<Toaster_6e6ebf8d7ce589d59b7d382fb7576edf/>
</Fragment>
<Flex_aad934d84d447931db0364ec134f51d5/>
<NextHead>

<title>

{"AI Image Generator - Reflex"}
</title>
<meta content={"Generate an image using AI with Reflex"} name={"description"}/>
<meta content={"favicon.ico"} property={"og:image"}/>
</NextHead>
</ErrorBoundary>
  )
}

export function Flex_aad934d84d447931db0364ec134f51d5 () {
  const [copying, setCopying] = useState(false)
  refs['_client_state_copying'] = copying
  refs['_client_state_setCopying'] = setCopying
  const ref_mobile_header = useRef(null); refs["ref_mobile_header"] = ref_mobile_header;
  const ref_image_ui = useRef(null); refs["ref_image_ui"] = ref_image_ui;




  return (
    <RadixThemesFlex css={({ ["@media screen and (min-width: 0)"] : ({ ["flexDirection"] : "column" }), ["@media screen and (min-width: 30em)"] : ({ ["flexDirection"] : "column" }), ["@media screen and (min-width: 48em)"] : ({ ["flexDirection"] : "column" }), ["@media screen and (min-width: 62em)"] : ({ ["flexDirection"] : "row" }), ["position"] : "relative", ["width"] : "100%", ["height"] : "100%", ["background"] : "var(--gray-1)" })}>

{}
<RadixThemesBox css={({ ["@media screen and (min-width: 0)"] : ({ ["display"] : "none", ["width"] : "100%" }), ["@media screen and (min-width: 30em)"] : ({ ["display"] : "none", ["width"] : "100%" }), ["@media screen and (min-width: 48em)"] : ({ ["display"] : "none", ["width"] : "100%" }), ["@media screen and (min-width: 62em)"] : ({ ["display"] : "block", ["width"] : "375px" }), ["@media screen and (min-width: 80em)"] : ({ ["width"] : "450px" }), ["height"] : "100vh", ["position"] : "sticky", ["top"] : "0px", ["left"] : "0px", ["background"] : "var(--gray-2)", ["borderRight"] : "1.5px solid var(--gray-a5)" })}>

<RadixThemesFlex align={"start"} className={"rx-Stack"} css={({ ["width"] : "100%", ["height"] : "100%" })} direction={"column"} gap={"0"}>

<RadixThemesFlex align={"center"} className={"rx-Stack"} css={({ ["width"] : "100%", ["borderBottom"] : "1.5px solid var(--gray-a5)", ["padding"] : "1em" })} direction={"row"} gap={"3"}>

<Link_d28e69e60481b49151438b12473f17ff/>
<RadixThemesFlex css={({ ["flex"] : 1, ["justifySelf"] : "stretch", ["alignSelf"] : "stretch" })}/>
<Iconbutton_dd0e3fe5b612a2724a3c15d194346635/>
</RadixThemesFlex>
<RadixThemesFlex css={({ ["overflowY"] : "auto", ["flex"] : "1", ["height"] : "100%", ["width"] : "100%" })}>

<RadixThemesFlex align={"start"} className={"rx-Stack"} css={({ ["width"] : "100%", ["overflowY"] : "auto", ["padding"] : "1em" })} direction={"column"} gap={"6"}>

<RadixThemesFlex align={"start"} className={"rx-Stack"} css={({ ["width"] : "100%" })} direction={"column"} gap={"3"}>

<RadixThemesFlex align={"center"} className={"rx-Stack"} css={({ ["width"] : "100%" })} direction={"row"} gap={"2"}>

<LucideTypeIcon css={({ ["strokeWidth"] : "1.75px", ["color"] : "var(--green-9)" })} size={17}/>
<RadixThemesText as={"p"} size={"3"}>

{"Prompt"}
</RadixThemesText>
<RadixThemesFlex css={({ ["flex"] : 1, ["justifySelf"] : "stretch", ["alignSelf"] : "stretch" })}/>
<RadixThemesFlex align={"center"} className={"rx-Stack"} direction={"row"} gap={"4"}>

<Fragment_6e2229589ec76a52b7b1c9d71e50ed9d/>
<RadixThemesTooltip content={"Randomize prompt"}>

<RadixThemesBox>

<Dicesicon_da36a30ee7411ca322413f564c884791/>
</RadixThemesBox>
</RadixThemesTooltip>
</RadixThemesFlex>
</RadixThemesFlex>
<Debounceinput_350d93a438ffc9d60f8a89d5f26e5ec8/>
</RadixThemesFlex>
<RadixThemesFlex align={"start"} className={"rx-Stack"} css={({ ["width"] : "100%" })} direction={"column"} gap={"3"}>

<RadixThemesFlex align={"center"} className={"rx-Stack"} css={({ ["width"] : "100%" })} direction={"row"} gap={"2"}>

<LucideScanIcon css={({ ["strokeWidth"] : "1.75px", ["color"] : "var(--orange-9)" })} size={17}/>
<RadixThemesText as={"p"} size={"3"}>

{"Dimensions"}
</RadixThemesText>
</RadixThemesFlex>
<RadixThemesFlex align={"start"} className={"rx-Stack"} css={({ ["width"] : "100%" })} direction={"column"} gap={"3"}>

<Slider_14e3b1f99b30651700bafb1a65059ea7/>
<RadixThemesFlex align={"center"} className={"rx-Stack"} css={({ ["position"] : "relative", ["width"] : "100%" })} direction={"row"} justify={"between"} gap={"3"}>

<LucideRectangleHorizontalIcon css={({ ["strokeWidth"] : "1.75px", ["color"] : "var(--gray-9)" })} size={22}/>
<Flex_243d7193ff7caa93e903f868fb33c769/>
<Text_c75bec73375c055bed27e6e0dce56b92/>
<LucideRectangleVerticalIcon css={({ ["strokeWidth"] : "1.75px", ["color"] : "var(--gray-9)" })} size={22}/>
</RadixThemesFlex>
</RadixThemesFlex>
</RadixThemesFlex>
<RadixThemesFlex align={"start"} className={"rx-Stack"} css={({ ["width"] : "100%" })} direction={"column"} gap={"3"}>

<RadixThemesFlex align={"center"} className={"rx-Stack"} css={({ ["width"] : "100%" })} direction={"row"} gap={"2"}>

<LucideImageIcon css={({ ["strokeWidth"] : "1.75px", ["color"] : "var(--crimson-9)" })} size={17}/>
<RadixThemesText as={"p"} size={"3"}>

{"Image count"}
</RadixThemesText>
<RadixThemesFlex css={({ ["flex"] : 1, ["justifySelf"] : "stretch", ["alignSelf"] : "stretch" })}/>
<Text_8b0868af63c4ee1f41d2e0ca269fa13c/>
</RadixThemesFlex>
<Slider_9ba3ad78e12e10deecab9032543097c8/>
</RadixThemesFlex>
<RadixThemesFlex align={"start"} className={"rx-Stack"} css={({ ["width"] : "100%" })} direction={"column"} gap={"3"}>

<RadixThemesFlex align={"center"} className={"rx-Stack"} css={({ ["width"] : "100%" })} direction={"row"} gap={"2"}>

<LucidePaletteIcon css={({ ["strokeWidth"] : "1.75px", ["color"] : "var(--indigo-9)" })} size={17}/>
<RadixThemesText as={"p"} size={"3"}>

{"Style"}
</RadixThemesText>
<RadixThemesFlex css={({ ["flex"] : 1, ["justifySelf"] : "stretch", ["alignSelf"] : "stretch" })}/>
<Fragment_14e751f8f8713781a85d0a57c03bdf3e/>
</RadixThemesFlex>
<RadixThemesScrollArea css={({ ["height"] : "100%", ["width"] : "100%" })} scrollbars={"horizontal"} type={"always"}>

<Flex_663eabfbde78cbfc52c0e0f5c4caeae0/>
</RadixThemesScrollArea>
</RadixThemesFlex>
<RadixThemesFlex align={"start"} className={"rx-Stack"} css={({ ["width"] : "100%" })} direction={"column"} gap={"3"}>

<Fragment_95488fc95f5e0d8a41f935e587770677/>
<Fragment_d8b60663319908ad59d8671a536c73ca/>
</RadixThemesFlex>
</RadixThemesFlex>
</RadixThemesFlex>
<RadixThemesBox css={({ ["position"] : "sticky", ["bottom"] : "0", ["padding"] : "1em", ["background"] : "var(--gray-2)", ["borderTop"] : "1.5px solid var(--gray-a5)", ["width"] : "100%" })}>

<Fragment_feaf4c1238c272df3ce5c1aa48fa6c02/>
</RadixThemesBox>
</RadixThemesFlex>
</RadixThemesBox>
<RadixThemesFlex align={"center"} className={"rx-Stack"} css={({ ["@media screen and (min-width: 0)"] : ({ ["display"] : "flex" }), ["@media screen and (min-width: 30em)"] : ({ ["display"] : "flex" }), ["@media screen and (min-width: 48em)"] : ({ ["display"] : "flex" }), ["@media screen and (min-width: 62em)"] : ({ ["display"] : "none" }), ["borderBottom"] : "1.5px solid var(--gray-a5)", ["width"] : "100%", ["padding"] : "1em" })} direction={"row"} id={"mobile-header"} justify={"end"} ref={ref_mobile_header} gap={"3"}>

<Link_7cf1c9f6ccb1d11b008d9ed329df0d9c/>
<RadixThemesFlex css={({ ["flex"] : 1, ["justifySelf"] : "stretch", ["alignSelf"] : "stretch" })}/>
<Iconbutton_5caf89a6a1c9b5724159d367a21ffbf5/>
</RadixThemesFlex>
<RadixThemesFlex css={({ ["display"] : "flex", ["alignItems"] : "center", ["justifyContent"] : "center", ["width"] : "100%", ["height"] : "100%", ["@media screen and (min-width: 0)"] : ({ ["padding"] : "1em" }), ["@media screen and (min-width: 30em)"] : ({ ["padding"] : "1em" }), ["@media screen and (min-width: 48em)"] : ({ ["padding"] : "1em" }), ["@media screen and (min-width: 62em)"] : ({ ["padding"] : "3em" }) })}>

<RadixThemesFlex align={"center"} className={"rx-Stack"} css={({ ["maxWidth"] : "1280px", ["height"] : "100%" })} direction={"column"} id={"image-ui"} ref={ref_image_ui} gap={"3"}>

<Fragment_a8d039c295d74776b8e2c617c1264707/>
<RadixThemesFlex align={"center"} className={"rx-Stack"} css={({ ["width"] : "100%" })} direction={"row"} justify={"end"} gap={"3"}>

<Fragment_135d3d84978f6f4fe02f3180d683824f/>
<Fragment_35a4be9751b0edd45efd1d55cec20d08/>
<Fragment_9bda26f0fd1ba07490fd7d5a2fb397f2/>
</RadixThemesFlex>
<Scrollarea_92cbf2726cf54f4389b27711122c2335/>
</RadixThemesFlex>
</RadixThemesFlex>
<RadixThemesBox css={({ ["@media screen and (min-width: 0)"] : ({ ["display"] : "block" }), ["@media screen and (min-width: 30em)"] : ({ ["display"] : "block" }), ["@media screen and (min-width: 48em)"] : ({ ["display"] : "block" }), ["@media screen and (min-width: 62em)"] : ({ ["display"] : "none" }), ["width"] : "100%", ["height"] : "100%", ["background"] : "var(--gray-2)", ["borderTop"] : "1.5px solid var(--gray-a5)" })}>

<RadixThemesFlex align={"start"} className={"rx-Stack"} css={({ ["width"] : "100%" })} direction={"column"} gap={"0"}>

<RadixThemesFlex align={"start"} className={"rx-Stack"} css={({ ["width"] : "100%", ["height"] : "100%", ["alignItems"] : "flex-start", ["padding"] : "1em" })} direction={"column"} gap={"6"}>

<RadixThemesFlex align={"start"} className={"rx-Stack"} css={({ ["width"] : "100%" })} direction={"column"} gap={"3"}>

<RadixThemesFlex align={"center"} className={"rx-Stack"} css={({ ["width"] : "100%" })} direction={"row"} gap={"2"}>

<LucideTypeIcon css={({ ["strokeWidth"] : "1.75px", ["color"] : "var(--green-9)" })} size={17}/>
<RadixThemesText as={"p"} size={"3"}>

{"Prompt"}
</RadixThemesText>
<RadixThemesFlex css={({ ["flex"] : 1, ["justifySelf"] : "stretch", ["alignSelf"] : "stretch" })}/>
<RadixThemesFlex align={"center"} className={"rx-Stack"} direction={"row"} gap={"4"}>

<Fragment_6e2229589ec76a52b7b1c9d71e50ed9d/>
<RadixThemesTooltip content={"Randomize prompt"}>

<RadixThemesBox>

<Dicesicon_da36a30ee7411ca322413f564c884791/>
</RadixThemesBox>
</RadixThemesTooltip>
</RadixThemesFlex>
</RadixThemesFlex>
<Debounceinput_350d93a438ffc9d60f8a89d5f26e5ec8/>
</RadixThemesFlex>
<RadixThemesFlex align={"start"} className={"rx-Stack"} css={({ ["width"] : "100%" })} direction={"column"} gap={"3"}>

<RadixThemesFlex align={"center"} className={"rx-Stack"} css={({ ["width"] : "100%" })} direction={"row"} gap={"2"}>

<LucideScanIcon css={({ ["strokeWidth"] : "1.75px", ["color"] : "var(--orange-9)" })} size={17}/>
<RadixThemesText as={"p"} size={"3"}>

{"Dimensions"}
</RadixThemesText>
</RadixThemesFlex>
<RadixThemesFlex align={"start"} className={"rx-Stack"} css={({ ["width"] : "100%" })} direction={"column"} gap={"3"}>

<Slider_14e3b1f99b30651700bafb1a65059ea7/>
<RadixThemesFlex align={"center"} className={"rx-Stack"} css={({ ["position"] : "relative", ["width"] : "100%" })} direction={"row"} justify={"between"} gap={"3"}>

<LucideRectangleHorizontalIcon css={({ ["strokeWidth"] : "1.75px", ["color"] : "var(--gray-9)" })} size={22}/>
<Flex_243d7193ff7caa93e903f868fb33c769/>
<Text_c75bec73375c055bed27e6e0dce56b92/>
<LucideRectangleVerticalIcon css={({ ["strokeWidth"] : "1.75px", ["color"] : "var(--gray-9)" })} size={22}/>
</RadixThemesFlex>
</RadixThemesFlex>
</RadixThemesFlex>
<RadixThemesFlex align={"start"} className={"rx-Stack"} css={({ ["width"] : "100%" })} direction={"column"} gap={"3"}>

<RadixThemesFlex align={"center"} className={"rx-Stack"} css={({ ["width"] : "100%" })} direction={"row"} gap={"2"}>

<LucideImageIcon css={({ ["strokeWidth"] : "1.75px", ["color"] : "var(--crimson-9)" })} size={17}/>
<RadixThemesText as={"p"} size={"3"}>

{"Image count"}
</RadixThemesText>
<RadixThemesFlex css={({ ["flex"] : 1, ["justifySelf"] : "stretch", ["alignSelf"] : "stretch" })}/>
<Text_8b0868af63c4ee1f41d2e0ca269fa13c/>
</RadixThemesFlex>
<Slider_9ba3ad78e12e10deecab9032543097c8/>
</RadixThemesFlex>
<RadixThemesFlex align={"start"} className={"rx-Stack"} css={({ ["width"] : "100%" })} direction={"column"} gap={"3"}>

<RadixThemesFlex align={"center"} className={"rx-Stack"} css={({ ["width"] : "100%" })} direction={"row"} gap={"2"}>

<LucidePaletteIcon css={({ ["strokeWidth"] : "1.75px", ["color"] : "var(--indigo-9)" })} size={17}/>
<RadixThemesText as={"p"} size={"3"}>

{"Style"}
</RadixThemesText>
<RadixThemesFlex css={({ ["flex"] : 1, ["justifySelf"] : "stretch", ["alignSelf"] : "stretch" })}/>
<Fragment_14e751f8f8713781a85d0a57c03bdf3e/>
</RadixThemesFlex>
<RadixThemesScrollArea css={({ ["height"] : "100%", ["width"] : "100%" })} scrollbars={"horizontal"} type={"always"}>

<Flex_663eabfbde78cbfc52c0e0f5c4caeae0/>
</RadixThemesScrollArea>
</RadixThemesFlex>
<RadixThemesFlex align={"start"} className={"rx-Stack"} css={({ ["width"] : "100%" })} direction={"column"} gap={"3"}>

<Fragment_95488fc95f5e0d8a41f935e587770677/>
<Fragment_d8b60663319908ad59d8671a536c73ca/>
</RadixThemesFlex>
</RadixThemesFlex>
<RadixThemesBox css={({ ["position"] : "sticky", ["bottom"] : "0", ["padding"] : "1em", ["background"] : "var(--gray-2)", ["borderTop"] : "1.5px solid var(--gray-a5)", ["width"] : "100%" })}>

<Fragment_feaf4c1238c272df3ce5c1aa48fa6c02/>
</RadixThemesBox>
</RadixThemesFlex>
</RadixThemesBox>
</RadixThemesFlex>
  )
}

export function Toaster_6e6ebf8d7ce589d59b7d382fb7576edf () {
  const { resolvedColorMode } = useContext(ColorModeContext)

  refs['__toast'] = toast
  const [addEvents, connectErrors] = useContext(EventLoopContext);
  const toast_props = ({ ["description"] : ("Check if server is reachable at "+getBackendURL(env.EVENT).href), ["closeButton"] : true, ["duration"] : 120000, ["id"] : "websocket-error" });
  const [userDismissed, setUserDismissed] = useState(false);
  (useEffect(
() => {
    if ((connectErrors.length >= 2)) {
        if (!userDismissed) {
            toast.error(
                `Cannot connect to server: ${((connectErrors.length > 0) ? connectErrors[connectErrors.length - 1].message : '')}.`,
                {...toast_props, onDismiss: () => setUserDismissed(true)},
            )
        }
    } else {
        toast.dismiss("websocket-error");
        setUserDismissed(false);  // after reconnection reset dismissed state
    }
}
, [connectErrors]))



  return (
    <Toaster closeButton={false} expand={true} position={"bottom-right"} richColors={true} theme={resolvedColorMode}/>
  )
}

export default function Component() {

  return (
    <Errorboundary_198f73c8e7bc8fbec5781502992101b3/>
  )
}
