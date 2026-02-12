# Copilot Capability Map

An interactive, clickable map of GitHub's AI-powered Developer Platform that helps users explore capabilities, understand how Copilot accomplishes each task, and access demo flows with copyable prompts.

**Experience Qualities**:
1. **Discoverable** - Users can quickly find and explore capabilities through visual hotspots, search, and stage filters
2. **Informative** - Each capability provides comprehensive details including summaries, demo flows, and actionable prompts
3. **Practical** - Copyable prompts and documentation links make it immediately useful for demos and learning

**Complexity Level**: Light Application (multiple features with basic state)
- Multiple interactive features including hotspots, search, filters, and a detail panel, but all client-side with no backend or auth required

## Essential Features

### Interactive Capability Map
- **Functionality**: Display background image with clickable hotspot overlays for each capability
- **Purpose**: Provides visual navigation through the platform capabilities
- **Trigger**: Page load displays the map with all hotspots
- **Progression**: User views map → hovers over hotspot (cursor changes) → clicks hotspot → capability highlighted with glow → detail panel updates
- **Success criteria**: All hotspots are clickable and properly positioned over corresponding pills in the image

### Detail Panel
- **Functionality**: Right-side panel showing comprehensive information about selected capability
- **Purpose**: Delivers actionable information including demo flows and copyable prompts
- **Trigger**: Clicking a hotspot or selecting from search
- **Progression**: User selects capability → panel animates in/updates → user reads summary → views demo steps → copies prompts → opens docs
- **Success criteria**: Panel displays all data fields with working copy buttons and external links

### Search
- **Functionality**: Text input that filters and selects capabilities
- **Purpose**: Quick access to specific capabilities by name
- **Trigger**: User types in search box
- **Progression**: User types → matching capabilities shown as suggestions → user clicks suggestion → capability selected and highlighted
- **Success criteria**: Search filters capabilities in real-time and selecting jumps to that capability

### Stage Filters
- **Functionality**: Filter pills (Plan, Code, Verify, Deploy, Operate) to highlight capabilities by stage
- **Purpose**: Focus exploration on specific development lifecycle stages
- **Trigger**: User clicks a stage filter pill
- **Progression**: User clicks stage → hotspots for that stage are emphasized → other stages dimmed
- **Success criteria**: Clicking a filter visually highlights relevant capabilities

### Copy Prompts
- **Functionality**: Copy buttons next to each prompt that copy text to clipboard
- **Purpose**: Enable users to quickly use prompts in their own workflows
- **Trigger**: User clicks copy button
- **Progression**: User clicks copy → text copied to clipboard → toast confirmation shown
- **Success criteria**: Prompt text is copied and user receives visual feedback

## Edge Case Handling

- **Empty search results**: Show "No capabilities found" message with option to clear search
- **Long prompt text**: Wrap text properly with scroll if needed, copy button always visible
- **Image loading**: Show loading skeleton while background image loads
- **Mobile viewport**: Stack layout vertically with map on top, panel below

## Design Direction

The design should feel professional, modern, and aligned with GitHub's product aesthetic. It should evoke confidence and clarity - users should feel they're exploring a well-organized, comprehensive platform. The visual hierarchy should guide attention from the map to details seamlessly.

## Color Selection

- **Primary Color**: `oklch(0.55 0.2 250)` - GitHub-inspired blue for primary actions and selected states
- **Secondary Colors**: Stage-specific colors matching the image:
  - Plan: `oklch(0.75 0.15 350)` (pink)
  - Code: `oklch(0.7 0.18 30)` (orange)
  - Verify: `oklch(0.7 0.15 150)` (green)
  - Deploy: `oklch(0.65 0.15 280)` (purple)
  - Operate: `oklch(0.6 0.12 180)` (teal)
- **Accent Color**: `oklch(0.65 0.2 145)` (bright green) for success states and copy confirmations
- **Foreground/Background Pairings**:
  - Background (`oklch(0.98 0.01 250)`): Foreground (`oklch(0.2 0.02 250)`) - Ratio 12:1 ✓
  - Card (`oklch(1 0 0)`): Card-foreground (`oklch(0.25 0 0)`) - Ratio 14:1 ✓
  - Primary (`oklch(0.55 0.2 250)`): Primary-foreground (`oklch(1 0 0)`) - Ratio 7:1 ✓

## Font Selection

Typography should be clean, technical, and highly readable. Using Inter for its excellent legibility and modern aesthetic that matches GitHub's design language.

- **Typographic Hierarchy**:
  - H1 (Page Title): Inter Bold/28px/tight letter spacing
  - H2 (Capability Label): Inter Semibold/20px/normal
  - H3 (Section Headers): Inter Medium/14px/uppercase/wide letter spacing
  - Body: Inter Regular/14px/1.5 line height
  - Code/Prompts: JetBrains Mono/13px/1.4 line height

## Animations

Animations should be subtle and purposeful - reinforcing selection states and providing feedback. Hotspot hover should have a gentle scale effect, selection should trigger a ring glow animation, panel content should fade in smoothly, and copy buttons should provide instant visual feedback.

## Component Selection

- **Components**:
  - Card: Detail panel container with subtle shadow
  - Input: Search box with icon
  - Badge: Stage filter pills and capability tags
  - Button: Copy buttons, doc links
  - ScrollArea: Panel content scrolling
  - Separator: Section dividers in panel
  - Tooltip: Hotspot labels on hover
- **Customizations**:
  - HotspotButton: Custom transparent button with glow effect on selection
  - PromptBlock: Code block with integrated copy button
- **States**:
  - Hotspots: default (transparent), hover (subtle highlight), selected (ring glow)
  - Filters: default (muted), active (colored with higher opacity)
  - Copy button: default, copying (spinner), copied (checkmark)
- **Icon Selection**: Phosphor icons - MagnifyingGlass (search), Copy (copy), Check (copied), ArrowSquareOut (external link)
- **Spacing**: Consistent 16px (4) gaps, 24px (6) section spacing, 12px (3) inline spacing
- **Mobile**: Single column layout, collapsible map section, full-width panel
