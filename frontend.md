## **Color Assignment & Roles**

| Color         | Hex     | Role / Usage                                                                                                                                             |
| ------------- | ------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Light Neutral | #D3DAD9 | Backgrounds, cards, form fields, subtle borders, PWA offline overlays. Provides breathing space and offsets darker colors.                               |
| Dark Gray     | #37353E | Primary text, headers, footers, top nav bar, main buttons on dark mode, icons. Strong contrast for readability.                                          |
| Medium Gray   | #44444E | Secondary text, subheaders, metadata, placeholders, hover states. Softens hierarchy between text elements.                                               |
| Accent / Warm | #715A5A | Calls-to-action (CTA) like “Add Listing,” “Verify,” or “Boost Listing”; highlights, badges (verified/unverified), links. Adds warmth to neutral palette. |

---

## **Component-Level Color Suggestions**

1. **Header / Navbar**

   * Background: #37353E
   * Text: #D3DAD9
   * Icons: #D3DAD9 / #715A5A hover accent

2. **Search Bar**

   * Background: #D3DAD9
   * Input text: #37353E
   * Placeholder: #44444E
   * Button: #715A5A

3. **Listings Cards**

   * Card background: #D3DAD9
   * Listing name: #37353E
   * Category / distance info: #44444E
   * Verified badge: #715A5A
   * Hover shadow or border: subtle #44444E or a tiny lift

4. **CTA Buttons**

   * Primary: #715A5A (text #D3DAD9)
   * Secondary / disabled: #44444E (text #D3DAD9)
   * Hover/active states: slightly darker shade for #715A5A

5. **Forms / Inputs**

   * Field background: #D3DAD9
   * Border: #44444E
   * Focus border: #715A5A

6. **Footer**

   * Background: #37353E
   * Links: #D3DAD9
   * Accent highlights: #715A5A

7. **Offline / Loading State**

   * Background overlay: #D3DAD9 with 90% opacity
   * Text: #37353E
   * Button to retry: #715A5A

---

## **Typography & Hierarchy Tips**

* Use **#37353E** for all main headers and primary content. It’s dark enough for readability against #D3DAD9 backgrounds.
* **#44444E** for subtext, smaller metadata, timestamps, distances, categories.
* **#715A5A** sparingly for CTAs, badges, and highlights to draw attention.
* Stick to simple, geometric fonts (e.g., Inter, Poppins, Montserrat) to match clean, lightweight UX.

---

## **Mood / Feel**

* Muted, grounded, community-focused. Your palette is **soft yet tech-ready**, balancing warm accents (#715A5A) with neutral grays. It communicates **trust and approachability**, perfect for hyperlocal discovery.
* Avoid heavy multi-color backgrounds; stick mostly to #D3DAD9 for canvases and highlight functional elements with #715A5A.

---
# Other
---

## **Homepage Sections & Subsections**

### 1. **Header / Navbar**

* **Purpose:** Site branding, navigation, CTAs.
* **Subcomponents:**

  * Logo (`Locafind`)
  * Navigation links (`Home`, `Categories`, `Add Listing`)
  * Mobile hamburger menu (for responsive)
* **Notes:** Dark Gray (#37353E) background, Light Neutral (#D3DAD9) or Accent (#715A5A) for links/buttons.

---

### 2. **Hero Section**

* **Purpose:** Introduce Locafind, quick search, first impression.
* **Subcomponents:**

  * Headline (`Find Nearby Shops Instantly`)
  * Subtext / tagline (`Locate groceries, kiosks, etc...`)
  * Search bar / location prompt (input + button)
  * Primary CTA (`Search Now`)
* **Notes:** Light Neutral (#D3DAD9) background, Dark Gray (#37353E) text, Accent (#715A5A) button.

---

### 3. **Categories / Filters**

* **Purpose:** Let users filter by type (Food, Grocery, Repairs, Health, etc.)
* **Subcomponents:**

  * Horizontal scroll / buttons for categories
  * Active indicator for selected category
* **Notes:** Medium Gray (#44444E) for inactive, Accent (#715A5A) for active.

---

### 4. **Nearby Listings / Cards**

* **Purpose:** Show nearest vendors based on user location.
* **Subcomponents:**

  * Listing card:

    * Name
    * Category
    * Description / distance
    * Badge (Verified / Unverified)
    * CTA button (View Details / Claim / Verify)
* **Notes:** Card background Light Neutral (#D3DAD9), text Dark Gray (#37353E) primary, Medium Gray (#44444E) secondary, Accent (#715A5A) for badges & CTAs.

---

### 5. **Add / Suggest Listing CTA**

* **Purpose:** Encourage community participation.
* **Subcomponents:**

  * Small banner or button: `Add Your Shop` / `Suggest Listing`
* **Notes:** Standalone Accent (#715A5A) element to grab attention.

---

### 6. **Offline Mode / PWA Prompt**

* **Purpose:** Show user offline message if PWA is offline.
* **Subcomponents:**

  * Notification banner or modal
  * CTA to sync / refresh
* **Notes:** Light Neutral (#D3DAD9) background, Dark Gray (#37353E) text, Accent (#715A5A) button.

---

### 7. **Footer**

* **Purpose:** Site info, copyright, links.
* **Subcomponents:**

  * Footer nav links
  * Contact info / socials
  * Copyright
* **Notes:** Dark Gray (#37353E) background, Light Neutral (#D3DAD9) text.

---

### Optional / Later Sections

* **Testimonials / Community Highlights**: User stories or top contributors.
* **Featured Listings / Boosted Ads**: Paid listings highlight.
* **Map View**: If you plan to add map integration later.
* **Analytics / Stats**: Number of shops listed, verified, or active users.

---

### ✅ **Summary: Sections Count**

1. Header / Navbar
2. Hero Section
3. Categories / Filters
4. Nearby Listings / Cards
5. Add / Suggest Listing CTA
6. Offline Mode / PWA Prompt
7. Footer

Optional: 3–4 more (Map, Featured, Testimonials, Stats).

---



app/
├── layout.jsx                 # Root layout
├── page.jsx                   # Homepage (/)
├── globals.css               # Tailwind imports
├── components/               # All our components
│   ├── Header.jsx
│   ├── HeroSection.jsx
│   ├── HeroFeatures.jsx
│   ├── HeroActivity.jsx
│   └── Footer.jsx
└── (routes)/
    ├── search/
    │   └── page.jsx          # /search
    ├── categories/
    │   └── page.jsx          # /categories
    ├── map/
    │   └── page.jsx          # /map
    ├── suggest/
    │   └── page.jsx          # /suggest
    ├── verify/
    │   └── page.jsx          # /verify
    ├── auth/
    │   ├── login/
    │   │   └── page.jsx      # /auth/login
    │   └── register/
    │       └── page.jsx      # /auth/register
    └── legal/
        ├── privacy/
        │   └── page.jsx      # /privacy
        └── terms/
            └── page.jsx      # /terms