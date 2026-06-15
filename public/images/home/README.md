# Homepage triptych image

The homepage is configured to split one wide image across all three hero frames.

Upload your image using this exact path:

- `public/images/home/hero-triptych.jpg`

Recommended size: at least 2400 by 1400 pixels in landscape orientation.

The layout automatically crops the left, center, and right thirds into the three panels. Until this file is uploaded, the hero displays the dark placeholder treatment.

To use three separate images instead, change `imageMode` to `"separate"` in `components/home-triptych-hero.tsx` and upload:

- `hero-01.jpg`
- `hero-02.jpg`
- `hero-03.jpg`
