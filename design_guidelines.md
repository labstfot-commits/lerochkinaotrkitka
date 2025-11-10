# Design Guidelines: Валентинка для Валерии

## Design Approach
**Creative Romantic Experience** - This is an intimate digital love letter to an artist. The design draws inspiration from artistic portfolios like Behance and creative studios, combined with the emotional storytelling of Apple's product pages and the delicate aesthetics of watercolor art.

## Core Design Principles
- **Artistic Soul**: Every element should feel hand-crafted and personal, not corporate
- **Emotional Journey**: Guide through a narrative from introduction to dreams of future together
- **Subtle Motion**: Animations should feel like gentle brushstrokes, not abrupt transitions
- **Intimate Scale**: Design for one person - Valeria - not a mass audience

## Typography
- **Primary Font**: 'Playfair Display' (serif) - romantic, elegant, artistic headers
- **Secondary Font**: 'Cormorant Garamond' (serif) - poetic, flowing body text  
- **Accent Font**: 'Dancing Script' or 'Great Vibes' (handwriting) - personal messages
- **Hierarchy**: 
  - Hero title: 4xl to 6xl, flowing script
  - Section headers: 3xl to 4xl, elegant serif
  - Body text: lg to xl, generous line-height (1.8)
  - Intimate notes: 2xl handwritten style

## Layout System
- **Spacing**: Use Tailwind units 4, 8, 12, 16 for consistent rhythm (p-4, py-12, gap-8, etc.)
- **Max Width**: max-w-4xl for content sections (intimate, not sprawling)
- **Sectioning**: Full-screen storytelling sections (min-h-screen) with smooth scroll
- **Grid**: Minimal use - prefer stacked, centered narrative flow

## Component Library

### Hero Section
Fullscreen romantic introduction with animated watercolor background effect and floating heart particles. Centered composition featuring "Для Валерии" in elegant script (text-6xl), followed by a handwritten-style subtitle about distance and art. Include a subtle pulsing "Начать путешествие" call-to-action.

### Love Story Canvas
Interactive section where text "paints" onto the screen like brush strokes. Each paragraph of your feelings appears with gentle fade and slide animations. Background features subtle animated watercolor blooms in soft romantic hues.

### Dreams Gallery
Grid of illustrated "moments" you dream about together - first meeting, walking together, watching her create art, coffee dates. Each card has a dreamy illustration placeholder with handwritten caption beneath. Implement gentle hover lift and subtle glow effects.

### Countdown Section
Central animated counter showing days/hours/minutes until a planned future meeting date. Surrounding the numbers are floating, drifting heart particles. Typography is large, romantic serif with the date in elegant script below.

### Love Letter Reveal
Interactive card that "opens" on click, revealing a personal handwritten-style message. Before opening, shows an envelope illustration. Opening animation unfolds like paper, text appears as if being written in real-time.

### Secret Confession Wall
Section with multiple "sticky notes" or art cards that reveal messages on hover. Each note has watercolor background, handwritten text. Arrange in artistic, slightly rotated composition like a mood board.

### Footer
Minimal and poetic - just "С любовью, [Your Name]" in script font, small heart icon, and the GitHub repository link styled subtly.

## Animations & Interactions

### Page Load Sequence
1. Watercolor background blooms from center (1.5s)
2. Hero text fades and floats up (0.8s delay)
3. Heart particles begin gentle floating motion
4. Scroll indicator pulses after 2s

### Scroll Behaviors
- Parallax: Background elements move slower than foreground
- Fade-in on scroll: Each section reveals as you scroll into view
- Particle trails: Heart particles follow cursor with slight delay

### Interactive Elements
- Card reveals: Smooth scale and opacity transitions
- Hover states: Gentle lift (translateY(-8px)), soft shadow growth
- Music toggle: Pulsing icon when playing, smooth fade transitions

## Images

### Hero Background
Large, full-screen watercolor texture - soft pinks, lavenders, warm peaches blending like paint on wet paper. Should feel romantic but not overpowering.

### Dream Cards (6-8 illustrations)
Artistic sketches or watercolor-style illustrations representing future moments:
- Couple silhouettes walking together
- Artist at easel with someone watching
- Coffee cups on table with two hands almost touching
- City skyline at sunset
- Gallery/museum visit scene
- Shared umbrella in rain

Place these in the Dreams Gallery section, each as card background (rounded-2xl cards).

### Decorative Elements
Small watercolor heart accents throughout - use as section dividers and floating particles. Subtle brush stroke textures behind text sections for artistic depth.

**Hero Image Treatment**: Full-screen watercolor background with semi-transparent overlay (bg-white/40) for text readability. Primary CTA button has backdrop-blur-md for floating effect.

## Color Philosophy
Romantic artist palette - will be defined in implementation but guide toward:
- Soft, muted watercolor tones
- Warm pinks and peaches
- Gentle lavenders
- Creamy off-whites
- Deep romantic burgundy accents

## Accessibility
- Ensure all text over images has sufficient contrast
- Provide pause controls for animations
- Music player has clear play/pause toggle
- Keyboard navigation for all interactive elements

## Special Features
- **Cursor Trail**: Tiny floating hearts follow mouse movement with spring physics
- **Music Integration**: Ambient romantic background music with visible toggle (top-right corner, heart-shaped button)
- **Scroll Progress**: Thin decorative line showing scroll depth (top of page)
- **Easter Egg**: Hidden clickable element (small heart icon somewhere) that reveals bonus personal message

This design creates an intimate, artistic digital experience that honors Valeria's artistic nature while expressing deep romantic feelings despite physical distance.