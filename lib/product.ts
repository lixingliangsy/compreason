export interface InputField {
  key: string
  label: string
  type: 'input' | 'textarea' | 'select'
  placeholder?: string
  options?: string[]
}

export const PRODUCT = {
  name: "CompReason",
  slug: "compreason",
  tagline: "A defensible pay rationale, in plain language.",
  description: "Given a role, region, and seniority, generate a clear compensation rationale and offer-structure narrative you can share with finance or the candidate.",
  toolTitle: "Build a comp rationale",
  resultLabel: "Your comp rationale",
  ctaLabel: "Build rationale",
  features: [
  "Role and region framing",
  "Pay-band narrative",
  "Equity or bonus structure",
  "Talking points"
],
  inputs: [
  {
    "key": "role",
    "label": "Role",
    "type": "input",
    "placeholder": "e.g. Senior Data Scientist"
  },
  {
    "key": "region",
    "label": "Region",
    "type": "select",
    "options": [
      "US",
      "EU",
      "UK",
      "Other"
    ]
  },
  {
    "key": "seniority",
    "label": "Seniority",
    "type": "select",
    "options": [
      "Mid",
      "Senior",
      "Lead",
      "Manager"
    ]
  },
  {
    "key": "budget",
    "label": "Budget ceiling (optional)",
    "type": "input",
    "placeholder": "e.g. up to $160k"
  }
] as InputField[],
  systemPrompt: "You are a compensation analyst. Given a role, region, seniority, and an optional budget ceiling, write a compensation rationale: how to frame the role's pay, a suggested base/bonus/equity structure narrative, and 2-3 talking points for the offer conversation. Clearly state this is a reasoning template to sanity-check against real market data, not a live salary benchmark. In demo mode, return a realistic sample following this structure.",
  pricing: [
  {
    "tier": "Free",
    "price": "$0",
    "desc": "4 rationales/mo"
  },
  {
    "tier": "Pro",
    "price": "$15/mo",
    "desc": "Unlimited, save history"
  }
],
  mock: (inputs: Record<string, string>): string => {
  const role = (inputs['role'] || 'your role').trim()
  const region = inputs['region'] || 'US'
  const lvl = inputs['level'] || inputs['seniority'] || 'Senior'
  const b = (inputs['budget'] || '').trim()
  if (!role) return 'Name the role to build a comp rationale.'
  let out = 'COMP RATIONALE (' + lvl + ' ' + role + ' | ' + region + ')\n\n'
  out += 'FRAMING\nPosition the ' + role + ' pay against the scope and impact of the level, not just tenure.\n\n'
  out += 'STRUCTURE\n- Base: ' + (b ? 'within ' + b : 'aligned to the band for the level') + '\n- Bonus: performance-linked, paid ' + (region === 'US' ? 'annual' : 'per local practice') + '\n- Equity: offered where the band allows\n\n'
  out += 'TALKING POINTS\n1) Lead with scope and growth, not just the number.\n2) Be transparent about how the band is set.\n3) This is a reasoning template - confirm against real market data before sharing.\n\n'
  out += '\n--- (Mock demo. Add the role + region for a tailored rationale.)'
  return out
}
}
