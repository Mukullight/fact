import { createContext, useContext, useMemo, useReducer, useState } from "react"
import { applyDelta, Event, hydrateClientStorage, useEventLoop, refs } from "$/utils/state.js"

export const initialState = {"reflex___state____state": {"is_hydrated": false, "router": {"session": {"client_token": "", "client_ip": "", "session_id": ""}, "headers": {"host": "", "origin": "", "upgrade": "", "connection": "", "cookie": "", "pragma": "", "cache_control": "", "user_agent": "", "sec_websocket_version": "", "sec_websocket_key": "", "sec_websocket_extensions": "", "accept_encoding": "", "accept_language": ""}, "page": {"host": "", "path": "", "raw_path": "", "full_path": "", "full_raw_path": "", "params": {}}}}, "reflex___state____state.reflex___state____on_load_internal_state": {}, "reflex___state____state.reflex___state____update_vars_internal_state": {}, "reflex___state____state.test___backend___generation____generator_state": {"is_downloading": false, "is_generating": false, "is_upscaling": false, "output_image": "/default.webp", "output_list": [], "upscaled_image": ""}, "reflex___state____state.reflex___state____frontend_event_exception_state": {}, "reflex___state____state.test___backend___options____options_state": {"advanced_options_open": false, "dimensions": [[1728, 576], [1664, 576], [1600, 640], [1536, 640], [1472, 704], [1408, 704], [1344, 704], [1344, 768], [1280, 768], [1216, 832], [1152, 832], [1152, 896], [1088, 896], [1088, 960], [1024, 960], [1024, 1024], [960, 1024], [960, 1088], [896, 1088], [896, 1152], [832, 1152], [832, 1216], [768, 1280], [768, 1344], [704, 1344], [704, 1408], [704, 1472], [640, 1536], [640, 1600], [576, 1664], [576, 1728]], "dimensions_str": "1024 × 1024", "guidance_scale": 0, "hover": false, "negative_prompt": "deformed, distorted, disfigured, poorly drawn, bad anatomy, wrong anatomy, extra limb, missing limb, floating limbs, mutated hands and fingers, disconnected limbs, mutation, mutated, ugly, disgusting, blurry, amputation, text, watermark, signature", "num_outputs": 1, "prompt": "", "scheduler": "K_EULER", "seed": 0, "selected_dimensions": [1024, 1024], "selected_style": "Cinematic", "selected_style_prompt": ", cinematic still, emotional, harmonious, vignette, highly detailed, high budget, bokeh, cinemascope, moody, epic, gorgeous, film grain, grainy", "slider_tick": 15, "steps": 4, "styles_preset": {"Cinematic": {"path": "/styles/cinematic.webp", "prompt": ", cinematic still, emotional, harmonious, vignette, highly detailed, high budget, bokeh, cinemascope, moody, epic, gorgeous, film grain, grainy"}, "Digital Art": {"path": "/styles/digitalart.webp", "prompt": ", digital artwork, illustrative, painterly, matte painting, highly detailed, digital painting, artstation"}, "Radiant": {"path": "/styles/radiant.webp", "prompt": ", centered, painted, intricate, volumetric lighting, beautiful, rich deep colors masterpiece, sharp focus, ultra detailed, in the style of dan mumford and marc simonetti, astrophotography"}, "Sketch": {"path": "/styles/sketch.webp", "prompt": ", sketch, drawing, detailed, pencil, black and white by Paul Cadden"}, "Photographic": {"path": "/styles/photographic.webp", "prompt": ", cinematic photo, 35mm photograph, film, bokeh, professional, 4k, highly detailed"}, "Anime": {"path": "/styles/anime.webp", "prompt": ", anime character, detailed, vibrant, anime face, sharp focus, character design, wlop, artgem, kuvshinov, character design, manga style, a detailed painting, by Muqi, pixiv, contest winner, by Lü Ji, featured on Artstation, studio anime"}, "Fortnite": {"path": "/styles/fortnite.webp", "prompt": " as a character fortnite skin, fortnite, full body shot, highly detailed, in game render, gameplay screenshot, very detailed, full body shot 8k quality super realistic, headsculpt, name of the character is chad, inspired by senior character artist, trending on polycount, trending on artstation, good anatomy, very detailed face and eyes, very detailed body, 4k, 8k, super detailed, super realistic, youtube"}, "Funko Pop": {"path": "/styles/funkopop.webp", "prompt": " as a funko pop, very very intricate photorealistic, detailed studio lighting, award - winning crisp details,  detailed product photo, full body 3d render of funko pop, featured on dribble, pop vinyl figure, an album cover, inspired by Everett Warner"}, "Concept Art": {"path": "/styles/conceptart.webp", "prompt": "character sheet, concept design, contrast, style by kim jung gi, zabrocki, karlkka, jayison devadas, trending on artstation, 8k, ultra wide angle, pincushion lens effect"}, "Cyberpunk": {"path": "/styles/cyberpunk.webp", "prompt": "a beautiful portrait painting, cyberpunk style, by pascal blanche and sachin teng and sam yang and greg rutkowski, in style of colorful comic. symmetry, hyper detailed. octanev render. trending on artstation, hdri, smooth, sharp focus, illustration, sci-fi, fantasy, intricate, neon light, futuristic"}, "Fantasy": {"path": "/styles/fantasy.webp", "prompt": ", ultra detailed fantasy, dndbeyond, bright, colourful, realistic, dnd character portrait, full body, pathfinder, pinterest, art by ralph horsley, dnd, rpg, lotr game design fanart by concept art, behance hd, artstation, deviantart, hdr render in unreal engine 5, intricate, elegant"}, "Low Poly": {"path": "/styles/lowpoly.webp", "prompt": ", low poly character, 3d isometric render, white background, ambient occlusion, unity engine, square image"}, "Steampunk": {"path": "/styles/steampunk.webp", "prompt": ", steampunk cybernetic biomechanical, 3d model, very coherent symmetrical artwork, unreal engine realistic render, 8k, micro detail, intricate, elegant, highly detailed, centered, digital painting, artstation, smooth, sharp focus, illustration, artgerm, Caio Fantini, wlop"}, "Cartoon": {"path": "/styles/cartoon.webp", "prompt": ", anthro, very cute  film character, disney pixar zootopia character concept artwork, 3d concept, detailed fur, high detail iconic character for upcoming film, trending on artstation, character design, 3d artistic render, highly detailed, octane, blender, cartoon, shadows, lighting"}, "Post-Apocalyptic": {"path": "/styles/postapocalyptic.webp", "prompt": "a desolate wasteland, ruins, survivors, scavengers, mutated creatures, bleak landscape, post-apocalyptic world"}}}}

export const defaultColorMode = "system"
export const ColorModeContext = createContext(null);
export const UploadFilesContext = createContext(null);
export const DispatchContext = createContext(null);
export const StateContexts = {
  reflex___state____state: createContext(null),
  reflex___state____state__reflex___state____on_load_internal_state: createContext(null),
  reflex___state____state__reflex___state____update_vars_internal_state: createContext(null),
  reflex___state____state__test___backend___generation____generator_state: createContext(null),
  reflex___state____state__reflex___state____frontend_event_exception_state: createContext(null),
  reflex___state____state__test___backend___options____options_state: createContext(null),
}
export const EventLoopContext = createContext(null);
export const clientStorage = {"cookies": {}, "local_storage": {}, "session_storage": {}}

export const state_name = "reflex___state____state"

export const exception_state_name = "reflex___state____state.reflex___state____frontend_event_exception_state"

// Theses events are triggered on initial load and each page navigation.
export const onLoadInternalEvent = () => {
    const internal_events = [];

    // Get tracked cookie and local storage vars to send to the backend.
    const client_storage_vars = hydrateClientStorage(clientStorage);
    // But only send the vars if any are actually set in the browser.
    if (client_storage_vars && Object.keys(client_storage_vars).length !== 0) {
        internal_events.push(
            Event(
                'reflex___state____state.reflex___state____update_vars_internal_state.update_vars_internal',
                {vars: client_storage_vars},
            ),
        );
    }

    // `on_load_internal` triggers the correct on_load event(s) for the current page.
    // If the page does not define any on_load event, this will just set `is_hydrated = true`.
    internal_events.push(Event('reflex___state____state.reflex___state____on_load_internal_state.on_load_internal'));

    return internal_events;
}

// The following events are sent when the websocket connects or reconnects.
export const initialEvents = () => [
    Event('reflex___state____state.hydrate'),
    ...onLoadInternalEvent()
]

export const isDevMode = true

export const lastCompiledTimeStamp = "2024-12-25 12:41:40.149272"

export function UploadFilesProvider({ children }) {
  const [filesById, setFilesById] = useState({})
  refs["__clear_selected_files"] = (id) => setFilesById(filesById => {
    const newFilesById = {...filesById}
    delete newFilesById[id]
    return newFilesById
  })
  return (
    <UploadFilesContext.Provider value={[filesById, setFilesById]}>
      {children}
    </UploadFilesContext.Provider>
  )
}

export function EventLoopProvider({ children }) {
  const dispatch = useContext(DispatchContext)
  const [addEvents, connectErrors] = useEventLoop(
    dispatch,
    initialEvents,
    clientStorage,
  )
  return (
    <EventLoopContext.Provider value={[addEvents, connectErrors]}>
      {children}
    </EventLoopContext.Provider>
  )
}

export function StateProvider({ children }) {
  const [reflex___state____state, dispatch_reflex___state____state] = useReducer(applyDelta, initialState["reflex___state____state"])
  const [reflex___state____state__reflex___state____on_load_internal_state, dispatch_reflex___state____state__reflex___state____on_load_internal_state] = useReducer(applyDelta, initialState["reflex___state____state.reflex___state____on_load_internal_state"])
  const [reflex___state____state__reflex___state____update_vars_internal_state, dispatch_reflex___state____state__reflex___state____update_vars_internal_state] = useReducer(applyDelta, initialState["reflex___state____state.reflex___state____update_vars_internal_state"])
  const [reflex___state____state__test___backend___generation____generator_state, dispatch_reflex___state____state__test___backend___generation____generator_state] = useReducer(applyDelta, initialState["reflex___state____state.test___backend___generation____generator_state"])
  const [reflex___state____state__reflex___state____frontend_event_exception_state, dispatch_reflex___state____state__reflex___state____frontend_event_exception_state] = useReducer(applyDelta, initialState["reflex___state____state.reflex___state____frontend_event_exception_state"])
  const [reflex___state____state__test___backend___options____options_state, dispatch_reflex___state____state__test___backend___options____options_state] = useReducer(applyDelta, initialState["reflex___state____state.test___backend___options____options_state"])
  const dispatchers = useMemo(() => {
    return {
      "reflex___state____state": dispatch_reflex___state____state,
      "reflex___state____state.reflex___state____on_load_internal_state": dispatch_reflex___state____state__reflex___state____on_load_internal_state,
      "reflex___state____state.reflex___state____update_vars_internal_state": dispatch_reflex___state____state__reflex___state____update_vars_internal_state,
      "reflex___state____state.test___backend___generation____generator_state": dispatch_reflex___state____state__test___backend___generation____generator_state,
      "reflex___state____state.reflex___state____frontend_event_exception_state": dispatch_reflex___state____state__reflex___state____frontend_event_exception_state,
      "reflex___state____state.test___backend___options____options_state": dispatch_reflex___state____state__test___backend___options____options_state,
    }
  }, [])

  return (
    <StateContexts.reflex___state____state.Provider value={ reflex___state____state }>
    <StateContexts.reflex___state____state__reflex___state____on_load_internal_state.Provider value={ reflex___state____state__reflex___state____on_load_internal_state }>
    <StateContexts.reflex___state____state__reflex___state____update_vars_internal_state.Provider value={ reflex___state____state__reflex___state____update_vars_internal_state }>
    <StateContexts.reflex___state____state__test___backend___generation____generator_state.Provider value={ reflex___state____state__test___backend___generation____generator_state }>
    <StateContexts.reflex___state____state__reflex___state____frontend_event_exception_state.Provider value={ reflex___state____state__reflex___state____frontend_event_exception_state }>
    <StateContexts.reflex___state____state__test___backend___options____options_state.Provider value={ reflex___state____state__test___backend___options____options_state }>
      <DispatchContext.Provider value={dispatchers}>
        {children}
      </DispatchContext.Provider>
    </StateContexts.reflex___state____state__test___backend___options____options_state.Provider>
    </StateContexts.reflex___state____state__reflex___state____frontend_event_exception_state.Provider>
    </StateContexts.reflex___state____state__test___backend___generation____generator_state.Provider>
    </StateContexts.reflex___state____state__reflex___state____update_vars_internal_state.Provider>
    </StateContexts.reflex___state____state__reflex___state____on_load_internal_state.Provider>
    </StateContexts.reflex___state____state.Provider>
  )
}