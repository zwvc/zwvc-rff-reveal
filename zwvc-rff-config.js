
			// More info about initialization & config:
			// - https://revealjs.com/initialization/
			// - https://revealjs.com/config/
			Reveal.initialize({
				// The "normal" size of the presentation, aspect ratio will
				// be preserved when the presentation is scaled to fit different
				// resolutions. Can be specified using percentage units.
				width: 1024,
				height: 600,

				// Factor of the display size that should remain empty around
				// the content
				margin: 0,

				// Bounds for smallest/largest possible scale to apply to content
				minScale: 0.1,
				maxScale: 2.0,

				// Display presentation control arrows
				controls: false,

				// Help the user learn the controls by providing hints, for example by
				// bouncing the down arrow when they first encounter a vertical slide
				controlsTutorial: false,

				// Visibility rule for backwards navigation arrows; "faded", "hidden"
				// or "visible"
				controlsBackArrows: 'hidden',

				// Display a presentation progress bar
				progress: false,

				// Display the page number of the current slide
				// - true:    Show slide number
				// - false:   Hide slide number
				//
				// Can optionally be set as a string that specifies the number formatting:
				// - "h.v":   Horizontal . vertical slide number (default)
				// - "h/v":   Horizontal / vertical slide number
				// - "c":   Flattened slide number
				// - "c/t":   Flattened slide number / total slides
				//
				// Alternatively, you can provide a function that returns the slide
				// number for the current slide. The function should take in a slide
				// object and return an array with one string [slideNumber] or
				// three strings [n1,delimiter,n2]. See #formatSlideNumber().
				slideNumber: false,

				// Can be used to limit the contexts in which the slide number appears
				// - "all":      Always show the slide number
				// - "print":    Only when printing to PDF
				// - "speaker":  Only in the speaker view
				showSlideNumber: 'speaker',

				// Use 1 based indexing for # links to match slide number (default is zero
				// based)
				hashOneBasedIndex: false,

				// Add the current slide number to the URL hash so that reloading the
				// page/copying the URL will return you to the same slide
				hash: false,

				// Flags if we should monitor the hash and change slides accordingly
				respondToHashChanges: true,

				// Push each slide change to the browser history.  Implies `hash: true`
				history: false,

				// Enable keyboard shortcuts for navigation
				keyboard: true,

				// Optional function that blocks keyboard events when retuning false
				//
				// If you set this to 'focused', we will only capture keyboard events
				// for embedded decks when they are in focus
				keyboardCondition: null,

				// Disables the default reveal.js slide layout (scaling and centering)
				// so that you can use custom CSS layout
				disableLayout: false,

				// Enable the slide overview mode
				overview: true,

				// Vertical centering of slides
				center: true,

				// Enables touch navigation on devices with touch input
				touch: false,

				// Loop the presentation
				loop: true,

				// Change the presentation direction to be RTL
				rtl: false,

				// Changes the behavior of our navigation directions.
				//
				// "default"
				// Left/right arrow keys step between horizontal slides, up/down
				// arrow keys step between vertical slides. Space key steps through
				// all slides (both horizontal and vertical).
				//
				// "linear"
				// Removes the up/down arrows. Left/right arrows step through all
				// slides (both horizontal and vertical).
				//
				// "grid"
				// When this is enabled, stepping left/right from a vertical stack
				// to an adjacent vertical stack will land you at the same vertical
				// index.
				//
				// Consider a deck with six slides ordered in two vertical stacks:
				// 1.1    2.1
				// 1.2    2.2
				// 1.3    2.3
				//
				// If you're on slide 1.3 and navigate right, you will normally move
				// from 1.3 -> 2.1. If "grid" is used, the same navigation takes you
				// from 1.3 -> 2.3.
				navigationMode: 'default',

				// Randomizes the order of slides each time the presentation loads
				shuffle: false,

				// Turns fragments on and off globally
				fragments: true,

				// Flags whether to include the current fragment in the URL,
				// so that reloading brings you to the same fragment position
				fragmentInURL: false,

				// Flags if the presentation is running in an embedded mode,
				// i.e. contained within a limited portion of the screen
				embedded: false,

				// Flags if we should show a help overlay when the question-mark
				// key is pressed
				help: false,

				// Flags if it should be possible to pause the presentation (blackout)
				pause: false,

				// Flags if speaker notes should be visible to all viewers
				showNotes: false,

				// Global override for autolaying embedded media (video/audio/iframe)
				// - null:   Media will only autoplay if data-autoplay is present
				// - true:   All media will autoplay, regardless of individual setting
				// - false:  No media will autoplay, regardless of individual setting
				autoPlayMedia: null,

				// Global override for preloading lazy-loaded iframes
				// - null:   Iframes with data-src AND data-preload will be loaded when within
				//           the viewDistance, iframes with only data-src will be loaded when visible
				// - true:   All iframes with data-src will be loaded when within the viewDistance
				// - false:  All iframes with data-src will be loaded only when visible
				preloadIframes: null,

				// Can be used to globally disable auto-animation
				autoAnimate: true,

				// Optionally provide a custom element matcher that will be
				// used to dictate which elements we can animate between.
				autoAnimateMatcher: null,

				// Default settings for our auto-animate transitions, can be
				// overridden per-slide or per-element via data arguments
				autoAnimateEasing: 'ease',
				autoAnimateDuration: 1.0,
				autoAnimateUnmatched: true,

				// CSS properties that can be auto-animated. Position & scale
				// is matched separately so there's no need to include styles
				// like top/right/bottom/left, width/height or margin.
				autoAnimateStyles: [
				'opacity',
				'color',
				'background-color',
				'padding',
				'font-size',
				'line-height',
				'letter-spacing',
				'border-width',
				'border-color',
				'border-radius',
				'outline',
				'outline-offset'
				],

				// Controls automatic progression to the next slide
				// - 0:      Auto-sliding only happens if the data-autoslide HTML attribute
				//           is present on the current slide or fragment
				// - 1+:     All slides will progress automatically at the given interval
				// - false:  No auto-sliding, even if data-autoslide is present
				autoSlide: 10000,

				// Stop auto-sliding after user input
				autoSlideStoppable: false,

				// Use this method for navigation when auto-sliding (defaults to navigateNext)
				autoSlideMethod: null,

				// Specify the average time in seconds that you think you will spend
				// presenting each slide. This is used to show a pacing timer in the
				// speaker view
				defaultTiming: null,

				// Enable slide navigation via mouse wheel
				mouseWheel: false,

				// Opens links in an iframe preview overlay
				// Add `data-preview-link` and `data-preview-link="false"` to customise each link
				// individually
				previewLinks: false,

				// Exposes the reveal.js API through window.postMessage
				postMessage: true,

				// Dispatches all reveal.js events to the parent window through postMessage
				postMessageEvents: false,

				// Focuses body when page changes visibility to ensure keyboard shortcuts work
				focusBodyOnPageVisibilityChange: true,

				// Transition style
				transition: 'fade', // none/fade/slide/convex/concave/zoom

				// Transition speed
				transitionSpeed: 'slow', // default/fast/slow

				// Transition style for full page slide backgrounds
				backgroundTransition: 'fade', // none/fade/slide/convex/concave/zoom

				// The display mode that will be used to show slides
				display: 'block',

				// Hide cursor if inactive
				hideInactiveCursor: true,

				// Time before the cursor is hidden (in ms)
				hideCursorTime: 0,

				// Learn about plugins: https://revealjs.com/plugins/
				plugins: [ RevealFullscreen ],

			});