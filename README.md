# AeroBMSCE — Web Development Recruitment Task



## 1. What flaws did you identify in the original website?

- Fixed page, banner, image, and table widths caused unwanted horizontal scrolling.
- Header links were inconsistent and the former Contact link pointed to `contact.html`, which did not exist.
- The original header image contained substantial transparent whitespace, making the artwork appear small and far from the edge.
- Arial, Impact, and other unrelated font styles conflicted; small or low-contrast text weakened the hierarchy.
- Achievements were dense and hard to scan, despite important international and national competition results.
- The slideshow had a fixed-size image conflict; aircraft and team photos were inconsistently displayed.
- Partner opportunities appeared in an inflexible table, and logos were stretched or lacked contrast.
- Mobile behavior and keyboard focus required attention.

## 2. What design decisions and UI/UX approach did you take?

- **Brand system:** Used the twelve specified warm metallic and deep brown colours as named CSS variables, with light-on-dark text and readable dark-on-light header links. The original logo artwork and its colours were not changed.
- **Header:** Kept the previously cropped original logo file (`images/header-logo-trimmed.png`), used a wider consistent header container, retained desktop navigation on the right, and kept an accessible mobile Menu button.
- **Typography and layout:** Applied one system-font stack, scalable type, shared max-width containers, and consistent section spacing.
- **Homepage:** Separated the supplied team photo from the hero copy on desktop so faces and aircraft are not hidden by the panel; stacked the photo above text on mobile. Replaced the tiny airborne drone in Who We Are with the **supplied `images/cad-plane.png` fixed-wing aircraft illustration** on a warm dark surface.
- **Achievements:** Retained the existing year-by-year achievement cards, documented awards, reporting context, and interactive photo carousel.
- **Partners:** Preserved offered collaboration tiers and research details, grouped source-provided organisational logos by type and chose dark or light tile surfaces per source PNG contrast (not sponsor status).
- **Contact:** Kept Rajesh, Partnership Head, and `aerobmsce@bmsce.ac.in`, as supplied. Added structured labels and a working `mailto:` CTA rather than inventing additional contacts.
- **Accessibility:** Visible focus states, descriptive image alternatives, a keyboard-operable menu, and reduced-motion support. No fake browser zoom or `overflow-x: hidden` workarounds.

## 3. Describe one genuine technical problem and how you resolved it

**Issue actually encountered:** The Our Journey slideshow's photograph was stuck on the left side instead of occupying the carousel. An older ID selector, `#slide { width: 420px; }`, overrode a newer `.slide-container img { width: 100%; }` rule because ID selectors have higher CSS specificity.

**How it was resolved:** Removed the conflicting fixed width, made a single clear `#slide` rule use `width: 100%`, `height: 100%`, `object-fit: contain`, and `object-position: center`, and kept navigation buttons and dots. Subsequent screenshots from the actual browser showed the photograph centered while preserving its proportions. This showed why inspecting computed CSS and removing stale rules is preferable to adding repeated overrides.

## Items requiring confirmation before publishing publicly

- The **2026 SAE Aero Design West** entry in the supplied source names a **second-place MATLAB Simulation Award** and an **overall #16 global Micro Class result**. They are different reported rankings; the precise award category and result should be independently confirmed.
- The club's **75+ projects, 20+ podiums, 50+ research outputs, 10+ participating departments**, its start date, upcoming competitions, R&D subsidy, defence collaboration, prize amounts and promotional reach figures come from the supplied website and are **not independently verified**.
- Displayed organisations and software companies are **not automatically confirmed formal sponsors**. Formal partnership status requires verification.
- Source contact details include **Rajesh (Partnership Head)** and **aerobmsce@bmsce.ac.in**. No separate personal email or direct phone number was supplied, so none was invented.
- The original asset `images/cad-plane.png` is a transparent aircraft CAD illustration. It is the available fixed-wing model asset, rather than a photographed aircraft on an already-maroon background; the site supplies the maroon presentation panel.




