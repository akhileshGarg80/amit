import { Subject } from '../types';

export const syllabusData: Subject[] = [
  {
    id: 'maths',
    name: 'Maths',
    shortName: 'Maths',
    fullName: 'Quantitative Aptitude',
    totalTopics: 30,
    tier1TotalQs: 25,
    tier2TotalQs: 30,
    combinedTotalQs: 55,
    iconName: 'Calculator',
    tip: 'Arithmetic (Percentage, P&L, SI/CI, Time & Work, Speed) + Geometry + DI = approx 60% of Maths paper.',
    topics: [
      {
        id: 1,
        name: 'Number System',
        tier1Qs: '1–2',
        tier2Qs: '2–3',
        combinedQs: '3–5',
        percentage: 7,
        priority: 'med',
        category: 'Arithmetic',
        importantNotes: 'Special focus on Divisibility of 7, 11, 13, 72, 88 and Remainder Theorem.',
        subtopics: [
          'Classification of Numbers (Rational, Irrational, Prime, Co-prime, Composite)',
          'Divisibility Rules (Special rules for 7, 11, 13, 72, 88, 99)',
          'Unit Digit & Tens Digit Calculation (Cyclicity of numbers)',
          'Remainder Theorem (Euler theorem, Wilson theorem, Chinese remainder)',
          'Factors & Multiples (Total, Prime, Even/Odd factors, Sum & Product)',
          'Trailing Number of Zeros (Highest power of primes in factorials)',
          'Recurring Decimals & Fractions Conversion (Bar questions)',
          'Surds & Square Roots / Cube Roots simplification',
          'Successive Division & Common Remainder concepts'
        ]
      },
      {
        id: 2,
        name: 'LCM & HCF',
        tier1Qs: '0–1',
        tier2Qs: '1–2',
        combinedQs: '1–3',
        percentage: 3,
        priority: 'low',
        category: 'Arithmetic',
        importantNotes: 'Product of two numbers = LCM × HCF; Bell ringing and circular tracks.',
        subtopics: [
          'Basic Properties & Fundamental formula: (Num1 × Num2 = LCM × HCF)',
          'LCM & HCF of Fractions and Decimals',
          'Remainder based LCM Problems (Same remainder / Different remainders)',
          'Remainder based HCF Problems (Greatest number dividing x, y, z)',
          'Bells ringing together / Circular track meeting point problems',
          'Ratio based LCM & HCF questions'
        ]
      },
      {
        id: 3,
        name: 'Simplification / BODMAS',
        tier1Qs: '1–2',
        tier2Qs: '1–2',
        combinedQs: '2–4',
        percentage: 4,
        priority: 'low',
        category: 'Arithmetic',
        importantNotes: 'Watch out for Vinculum (Bar) and nested brackets ordering.',
        subtopics: [
          'VBODMAS Rule (Vinculum/Bar, Bracket, Of, Division, Multiply, Add, Subtract)',
          'Nested Bracket evaluation: ( ), { }, [ ]',
          'Algebraic Identities in Simplification (a³+b³, a³-b³, a+b+c=0)',
          'Continued Fractions (Ladder fractions / Langda Bhinn)',
          'Approximation & Value Rounding methods',
          'Square root surd simplification: √(a ± 2√b)'
        ]
      },
      {
        id: 4,
        name: 'Percentage',
        tier1Qs: '2–3',
        tier2Qs: '2–3',
        combinedQs: '4–6',
        percentage: 9,
        priority: 'high',
        category: 'Arithmetic',
        importantNotes: 'Fraction to percentage chart (1/1 to 1/25) is mandatory.',
        subtopics: [
          'Fraction to Percentage & Percentage to Fraction Table (1/2 to 1/25)',
          'Percentage Increase & Decrease (Successive formula: a + b + ab/100)',
          'Price, Consumption & Expenditure relation problems',
          'Income, Expenditure & Savings based problems',
          'Election based problems (Valid votes, Invalid votes, Winning margin)',
          'Population Growth & Machinery Depreciation',
          'Passing marks & Examination percentage questions',
          'Venn Diagram based Percentage questions'
        ]
      },
      {
        id: 5,
        name: 'Ratio & Proportion',
        tier1Qs: '1–3',
        tier2Qs: '2–3',
        combinedQs: '4–6',
        percentage: 9,
        priority: 'high',
        category: 'Arithmetic',
        importantNotes: 'Master Mean, Third, Fourth Proportion and Componendo-Dividendo.',
        subtopics: [
          'Basic Ratio Properties (Duplicate, Triplicate, Sub-duplicate, Compound)',
          'Combining Ratios (A:B and B:C into A:B:C:D)',
          'Mean Proportion, Third Proportion & Fourth Proportion',
          'Componendo & Dividendo Rule (C&D)',
          'Coin based problems (Denominations: ₹1, 50p, 25p)',
          'Income, Expenditure & Savings Ratio (Cross-multiplication shortcut)',
          'Proportional Distribution of Money & Items'
        ]
      },
      {
        id: 6,
        name: 'Average',
        tier1Qs: '1–2',
        tier2Qs: '1–2',
        combinedQs: '2–4',
        percentage: 5,
        priority: 'med',
        category: 'Arithmetic',
        importantNotes: 'Deviation method saves massive calculation time.',
        subtopics: [
          'Basic Average Concept & Total Sum calculation',
          'Consecutive Numbers / AP Series Average',
          'In-and-Out concepts (New person joins or leaves the group)',
          'Replacement problems (One person replaced by another)',
          'Cricket Batting & Bowling Average',
          'Weighted Average & Deviation Method',
          'Correction of Error (Wrongly entered reading in average)'
        ]
      },
      {
        id: 7,
        name: 'Profit & Loss',
        tier1Qs: '2–3',
        tier2Qs: '2–3',
        combinedQs: '4–6',
        percentage: 9,
        priority: 'high',
        category: 'Arithmetic',
        importantNotes: 'Dishonest shopkeeper and Same SP cases are tested in almost every shift.',
        subtopics: [
          'Basic CP, SP, Profit %, Loss % relations',
          'Equating CP or Equating SP problems (Same SP for both articles)',
          'Selling at a profit of x% and loss of x% (Net loss = x²/100)',
          'Article count based profit/loss (CP of X articles = SP of Y articles)',
          'Dishonest Shopkeeper / False Weight Cheating problems',
          'Successive Profit and Loss transactions',
          'Break-even Point and Markup percentage'
        ]
      },
      {
        id: 8,
        name: 'Discount',
        tier1Qs: '1–2',
        tier2Qs: '1–2',
        combinedQs: '2–4',
        percentage: 5,
        priority: 'med',
        category: 'Arithmetic',
        importantNotes: 'MP/CP = (100+P%)/(100-D%) is the golden formula for SSC.',
        subtopics: [
          'Marked Price (MP), Selling Price (SP), and Discount %',
          'Successive Discounts (Equivalent discount formula: d1 + d2 - d1d2/100)',
          'Buy X Get Y Free schemes (Net discount percentage calculation)',
          'Relation between CP, MP, Profit % & Discount %: MP/CP = (100+P)/(100-D)',
          'Cash discount vs Trade discount problems'
        ]
      },
      {
        id: 9,
        name: 'Simple Interest',
        tier1Qs: '1–2',
        tier2Qs: '1–2',
        combinedQs: '2–4',
        percentage: 5,
        priority: 'med',
        category: 'Arithmetic',
        importantNotes: 'Focus on sum becomes n-times questions and equal installments.',
        subtopics: [
          'Basic Formula: SI = (P × R × T) / 100',
          'Rate and Time relation when Interest becomes n times of Principal',
          'Change in Rate or Time effect on Interest',
          'Sum becomes x times in y years concept',
          'Principal split and lent in multiple parts at different rates',
          'Simple Interest Installment formula'
        ]
      },
      {
        id: 10,
        name: 'Compound Interest',
        tier1Qs: '1–2',
        tier2Qs: '1–2',
        combinedQs: '2–4',
        percentage: 5,
        priority: 'med',
        category: 'Arithmetic',
        importantNotes: 'Golden ratio (2:1, 3:3:1) and CI-SI difference formulas.',
        subtopics: [
          'Annual, Half-Yearly, Quarterly & 8-Monthly / 10-Monthly compounding',
          'Tree Method & Golden Ratio method (2:1, 3:3:1, 4:6:4:1)',
          'Difference between CI and SI for 2 years: P(R/100)²',
          'Difference between CI and SI for 3 years: P(R/100)² × (300+R)/100',
          'Sum becomes n times in t years compounding',
          'Equal Annual Installments in Compound Interest'
        ]
      },
      {
        id: 11,
        name: 'Partnership',
        tier1Qs: '0–1',
        tier2Qs: '1–2',
        combinedQs: '1–3',
        percentage: 3,
        priority: 'low',
        category: 'Arithmetic',
        importantNotes: 'Profit ratio = (Capital1 × Time1) : (Capital2 × Time2).',
        subtopics: [
          'Simple Partnership (Equal time, ratio of capital investment)',
          'Compound Partnership (Profit = Investment × Time ratio)',
          'Working Partner vs Sleeping Partner profit sharing',
          'Salary or Management Commission deduction before profit distribution',
          'Capital addition or withdrawal during the partnership period'
        ]
      },
      {
        id: 12,
        name: 'Mixture & Alligation',
        tier1Qs: '0–1',
        tier2Qs: '1–2',
        combinedQs: '1–3',
        percentage: 3,
        priority: 'low',
        category: 'Arithmetic',
        importantNotes: 'Replacement formula: Final = Initial × (1 - x/C)^n.',
        subtopics: [
          'Rule of Alligation (Cheaper, Dearer, Mean price balancing)',
          'Successive Replacement of liquids: Final = Initial × (1 - x/C)^n',
          'Mixing two or three alloys/solutions in predetermined ratios',
          'Alligation applied to Profit & Loss, SI, Average, Speed & Distance'
        ]
      },
      {
        id: 13,
        name: 'Time & Work',
        tier1Qs: '1–2',
        tier2Qs: '2–3',
        combinedQs: '3–5',
        percentage: 8,
        priority: 'high',
        category: 'Arithmetic',
        importantNotes: 'Total Work = LCM of days; MDH formula.',
        subtopics: [
          'LCM & Efficiency Method (Total Work = Days × Efficiency)',
          'Alternate Days Working (A on 1st day, B on 2nd day...)',
          'Leaving & Joining Work (Leaving before completion vs after start)',
          'Men, Women & Children work equivalence (x Men = y Women = z Boys)',
          'MDH Formula: (M1 × D1 × H1 × E1) / W1 = (M2 × D2 × H2 × E2) / W2',
          'Wages distribution strictly based on work done / efficiency'
        ]
      },
      {
        id: 14,
        name: 'Pipes & Cistern',
        tier1Qs: '0–1',
        tier2Qs: '1–2',
        combinedQs: '1–3',
        percentage: 3,
        priority: 'low',
        category: 'Arithmetic',
        importantNotes: 'Outlet pipes have negative efficiency.',
        subtopics: [
          'Inlet (Filling) and Outlet (Emptying / Leak) pipe rates',
          'Filling tank with a leak in the bottom',
          'Pipes opened alternately or for fixed intervals',
          'Pipes with different diameter cross-sections (Rate proportional to r²)',
          'Total capacity of tank calculation from flow rates'
        ]
      },
      {
        id: 15,
        name: 'Time, Speed & Distance',
        tier1Qs: '2–3',
        tier2Qs: '2–3',
        combinedQs: '4–6',
        percentage: 9,
        priority: 'high',
        category: 'Arithmetic',
        importantNotes: 'Relative speed and Trains crossing questions are guaranteed.',
        subtopics: [
          'Unit Conversions (km/h to m/s: multiply by 5/18)',
          'Average Speed: 2xy/(x+y) for equal distance & Total Distance / Total Time',
          'Relative Speed (Same direction: S1 - S2, Opposite: S1 + S2)',
          'Trains crossing a Pole, Platform, Bridge, or Another Moving Train',
          'Late / Early departure and arrival difference problems',
          'Meeting and continuing journey: S1/S2 = √(t2/t1)',
          'Races & Games (Head starts, dead heats, circular track laps)'
        ]
      },
      {
        id: 16,
        name: 'Boats & Streams',
        tier1Qs: '0–1',
        tier2Qs: '1–2',
        combinedQs: '1–3',
        percentage: 3,
        priority: 'low',
        category: 'Arithmetic',
        importantNotes: 'Downstream = B + S; Upstream = B - S.',
        subtopics: [
          'Downstream Speed (u = B + S) & Upstream Speed (v = B - S)',
          'Boat Speed in Still Water: B = (u + v)/2',
          'Stream / Current Speed: S = (u - v)/2',
          'Round trip total travel time equations',
          'Distance upstream vs downstream time comparisons'
        ]
      },
      {
        id: 17,
        name: 'Algebra',
        tier1Qs: '2–3',
        tier2Qs: '5–6',
        combinedQs: '7–9',
        percentage: 14,
        priority: 'high',
        category: 'Advance',
        importantNotes: 'Huge weightage in Tier 2 Mains (5 to 6 questions).',
        subtopics: [
          'Basic Identities: (a±b)², (a±b)³, a³±b³, a⁴-b⁴, a³+b³+c³-3abc',
          'Special Case: If a + b + c = 0, then a³ + b³ + c³ = 3abc',
          'Value Putting & Symmetric Expression shortcuts',
          'x + 1/x = k, finding powers: x², x³, x⁴, x⁵, x⁶, x⁷',
          'x - 1/x = k conversions and relationships',
          'Quadratic Equations (Roots α and β, Sum = -b/a, Product = c/a, Discriminant)',
          'Linear Equations in two variables (Unique, No, Infinitely many solutions)',
          'Maxima & Minima of quadratic expressions: ax² + bx + c'
        ]
      },
      {
        id: 18,
        name: 'Surds & Indices',
        tier1Qs: '0–1',
        tier2Qs: '1–2',
        combinedQs: '1–3',
        percentage: 3,
        priority: 'low',
        category: 'Advance',
        importantNotes: 'Infinite radical series and surds comparison.',
        subtopics: [
          'Laws of Indices: a^m × a^n, (a^m)^n, a^-n, fractional powers',
          'Comparison of Surds (Finding largest & smallest surds)',
          'Rationalization of Denominators: 1/(√a ± √b)',
          'Infinite Radical Series: √(x + √(x...)) and √(x × √(x...))',
          'Square Root of surds: √(x ± √y) = √a ± √b'
        ]
      },
      {
        id: 19,
        name: 'Logarithms',
        tier1Qs: '0–1',
        tier2Qs: '0–1',
        combinedQs: '0–2',
        percentage: 2,
        priority: 'low',
        category: 'Advance',
        importantNotes: 'Basic properties and change of base.',
        subtopics: [
          'Definition of Logarithm: log_b(a) = c <=> b^c = a',
          'Core Properties: log(xy) = log x + log y, log(x/y) = log x - log y',
          'Power Rule: log(x^k) = k log x, Change of Base theorem',
          'Characteristic & Mantissa values'
        ]
      },
      {
        id: 20,
        name: 'Geometry',
        tier1Qs: '4–5',
        tier2Qs: '5–6',
        combinedQs: '9–11',
        percentage: 16,
        priority: 'high',
        category: 'Advance',
        importantNotes: 'Single highest scoring topic in entire Maths (up to 11 questions).',
        subtopics: [
          'Lines & Angles (Complementary, Supplementary, Alternate, Corresponding)',
          'Triangles & Types (Congruence criteria: SSS, SAS, ASA, RHS; Similarity)',
          'Triangle Centers: Incenter (r = Δ/s), Circumcenter (R = abc/4Δ), Orthocenter, Centroid (2:1 ratio)',
          'Right Angled Triangle theorems & Apollonius Theorem',
          'Circles: Chords, Tangent-Secant theorem (PA × PB = PT²), Alternate segment theorem',
          'Cyclic Quadrilateral properties (Opposite angles sum = 180°, Ptolemy theorem)',
          'Direct Common Tangents (DCT) and Transverse Common Tangents (TCT)',
          'Polygons: Sum of interior angles = (n-2)×180°, Exterior angle = 360°/n, Diagonals = n(n-3)/2'
        ]
      },
      {
        id: 21,
        name: 'Mensuration (2D & 3D)',
        tier1Qs: '2–3',
        tier2Qs: '2–3',
        combinedQs: '4–6',
        percentage: 9,
        priority: 'high',
        category: 'Advance',
        importantNotes: 'Formulas for Cylinder, Cone, Sphere and Recasting solids.',
        subtopics: [
          '2D Figures: Triangle, Square, Rectangle, Rhombus, Parallelogram, Trapezium, Regular Hexagon',
          'Circles, Semi-circles, Sectors & Segments perimeter and area',
          '3D Figures: Cube, Cuboid, Cylinder, Hollow Cylinder, Cone, Frustum of Cone',
          'Sphere, Hemisphere, Hollow Spherical Shell',
          'Prism & Pyramid (Lateral Surface Area, Total Surface Area, Volume)',
          'Melting, Recasting and Cutting of 3D solids (Volume conservation)',
          'Cost of painting, carpeting, fencing and digging paths'
        ]
      },
      {
        id: 22,
        name: 'Trigonometry',
        tier1Qs: '2–3',
        tier2Qs: '2–3',
        combinedQs: '3–5',
        percentage: 8,
        priority: 'high',
        category: 'Advance',
        importantNotes: 'ASTC quadrant signs, identities, and degree value putting.',
        subtopics: [
          'Trigonometric Ratios (sin, cos, tan, cot, sec, cosec) and Table 0° to 90°',
          'Fundamental Identities: sin²θ+cos²θ=1, 1+tan²θ=sec²θ, 1+cot²θ=cosec²θ',
          'Quadrant Signs & ASTC Rule (90°±θ, 180°±θ, 270°±θ, 360°±θ)',
          'Complementary Angles: sin(90°-θ) = cos θ, tan(90°-θ) = cot θ',
          'Value Putting shortcuts for algebraic trigonometric expressions',
          'Maxima & Minima of Trigonometric Functions (a sin θ + b cos θ, a sin²θ + b cosec²θ)',
          'Circular Measure of Angles (Radians to Degrees, arc length l = rθ)'
        ]
      },
      {
        id: 23,
        name: 'Height & Distance',
        tier1Qs: '0–1',
        tier2Qs: '1–2',
        combinedQs: '1–3',
        percentage: 3,
        priority: 'low',
        category: 'Advance',
        importantNotes: 'Standard 30-60-90 (1 : √3 : 2) and 45-45-90 (1 : 1 : √2) ratios.',
        subtopics: [
          'Angle of Elevation and Angle of Depression concepts',
          'Standard Triangle Ratio Shortcuts (30°-60°-90° and 45°-45°-90°)',
          'Broken Pole / Tree broken by wind problems',
          'Two observation points on same side or opposite sides of a tower',
          'Moving towards or away from tower (Angle changes from 30° to 60°)',
          'Cloud and its water/lake reflection problems'
        ]
      },
      {
        id: 24,
        name: 'Coordinate Geometry',
        tier1Qs: '0–1',
        tier2Qs: '0–2',
        combinedQs: '1–3',
        percentage: 3,
        priority: 'low',
        category: 'Advance',
        importantNotes: 'Slopes m1×m2=-1 and distance of point from line.',
        subtopics: [
          'Cartesian Coordinates, Abscissa, Ordinate and Quadrants',
          'Distance Formula: √((x2-x1)² + (y2-y1)²)',
          'Section Formula: Internal & External division, Midpoint formula',
          'Area of Triangle using coordinates & Collinearity condition',
          'Centroid of Triangle coordinates formula',
          'Slope of a line (m = tan θ = (y2-y1)/(x2-x1)), Parallel & Perpendicular lines',
          'Equations of Lines: Slope-intercept (y = mx + c), Intercept form (x/a + y/b = 1)',
          'Perpendicular distance of a point (x1, y1) from line ax + by + c = 0'
        ]
      },
      {
        id: 25,
        name: 'Sequence & Series',
        tier1Qs: '0–1',
        tier2Qs: '1–2',
        combinedQs: '1–3',
        percentage: 3,
        priority: 'low',
        category: 'Advance',
        importantNotes: 'AP & GP nth term and sum formulas.',
        subtopics: [
          'Arithmetic Progression (AP): nth term Tn = a + (n-1)d, Sum Sn',
          'Geometric Progression (GP): nth term Tn = ar^(n-1), Sum Sn, Sum to infinity S∞',
          'Arithmetic Mean (AM) & Geometric Mean (GM), AM ≥ GM relation',
          'Special Sums: Sum of first n natural numbers, squares, and cubes'
        ]
      },
      {
        id: 26,
        name: 'Permutation & Combination',
        tier1Qs: '0–1',
        tier2Qs: '1–2',
        combinedQs: '1–3',
        percentage: 3,
        priority: 'low',
        category: 'Statistics & Modern',
        importantNotes: 'Arrangement vs Selection; Word permutations with duplicate letters.',
        subtopics: [
          'Fundamental Counting Principle (Multiplication & Addition rules)',
          'Factorial notations (n!)',
          'Permutation (Arrangement): nPr = n! / (n-r)!',
          'Combination (Selection): nCr = n! / [r! (n-r)!]',
          'Word formation with repeating letters (e.g., SUCCESS, MATHEMATICS)',
          'Circular arrangement seating: (n-1)!',
          'Handshakes and Tournament match combinations'
        ]
      },
      {
        id: 27,
        name: 'Probability',
        tier1Qs: '0–1',
        tier2Qs: '1–2',
        combinedQs: '1–3',
        percentage: 3,
        priority: 'low',
        category: 'Statistics & Modern',
        importantNotes: 'New TCS pattern includes Probability in Tier 2 Mains.',
        subtopics: [
          'Sample Space & Classical Definition: P(E) = Favourable / Total outcomes',
          'Coin Toss problems (1, 2, and 3 coins)',
          'Dice Rolling problems (Single die, Pair of dice, Sum of faces)',
          'Playing Cards 52 Deck problems (Suits, Face cards, Honours)',
          'Urn / Bag with colored balls (With and Without replacement)',
          'Independent Events and Mutually Exclusive Events',
          'At least one / At most probability conditions'
        ]
      },
      {
        id: 28,
        name: 'Statistics (Mean, Median, Mode)',
        tier1Qs: '0–1',
        tier2Qs: '1–2',
        combinedQs: '1–3',
        percentage: 3,
        priority: 'low',
        category: 'Statistics & Modern',
        importantNotes: 'Empirical formula: Mode = 3 Median - 2 Mean.',
        subtopics: [
          'Mean (Arithmetic average of ungrouped and grouped frequency data)',
          'Median (Odd vs Even observations, grouped median formula)',
          'Mode (Most repeated observation, grouped mode formula)',
          'Empirical Relation: Mode = 3 Median - 2 Mean',
          'Range, Variance (σ²) and Standard Deviation (σ)',
          'Coefficient of Variation (CV = (σ/Mean) × 100)'
        ]
      },
      {
        id: 29,
        name: 'Data Interpretation',
        tier1Qs: '3–5',
        tier2Qs: '5–6',
        combinedQs: '8–11',
        percentage: 17,
        priority: 'high',
        category: 'DI',
        importantNotes: 'Highest single block in exam (17% weightage). Speed calculation matters.',
        subtopics: [
          'Tables / Tabular Data (Percentage calculation, Year-on-year growth rate)',
          'Bar Charts (Single, Double & Stacked bar graphs)',
          'Line Graphs (Multi-line trend analysis, Production vs Sales)',
          'Pie Charts (Degree to percentage: 360° = 100%, Single & Double pie charts)',
          'Mixed Graphs (Bar + Line, Pie + Table combo sets)',
          'Caselet DI (Paragraph story based arithmetic data sets)'
        ]
      },
      {
        id: 30,
        name: 'Data Sufficiency',
        tier1Qs: '0–1',
        tier2Qs: '1–2',
        combinedQs: '1–3',
        percentage: 3,
        priority: 'low',
        category: 'DI',
        importantNotes: 'Identify if Statement 1 alone or 2 alone or both are sufficient.',
        subtopics: [
          'Evaluating whether Statement 1 alone, 2 alone, or both are sufficient',
          'Arithmetic Data Sufficiency (Ages, Percentages, Ratios, Speed & Work)',
          'Algebra and Geometry based sufficiency conditions'
        ]
      }
    ]
  },
  {
    id: 'reasoning',
    name: 'Reasoning',
    shortName: 'Reasoning',
    fullName: 'General Intelligence & Reasoning',
    totalTopics: 22,
    tier1TotalQs: 25,
    tier2TotalQs: 30,
    combinedTotalQs: 55,
    iconName: 'Brain',
    tip: 'Series + Analogy + Coding + Puzzle = approx 55% of Reasoning. Practice 50+ questions daily.',
    topics: [
      {
        id: 1,
        name: 'Analogy',
        tier1Qs: '2–4',
        tier2Qs: '3–4',
        combinedQs: '5–8',
        percentage: 12,
        priority: 'high',
        category: 'Verbal',
        importantNotes: 'Squares, cubes and letter positional relationships.',
        subtopics: [
          'Semantic / Word Analogy (Synonyms, Antonyms, Worker-Tool, Country-Capital, State-Language)',
          'Symbolic / Number Analogy (Squares, Cubes, Multiplications: n²±1, n³±n)',
          'Letter / Alphabet Analogy (Position shift, Reverse opposite letters: A-Z, B-Y)',
          'Figural Analogy (Shape transformation, Rotation, Inversion)'
        ]
      },
      {
        id: 2,
        name: 'Classification (Odd One Out)',
        tier1Qs: '1–3',
        tier2Qs: '3–4',
        combinedQs: '4–7',
        percentage: 10,
        priority: 'high',
        category: 'Verbal',
        importantNotes: 'Look for prime numbers and vowel/consonant distribution.',
        subtopics: [
          'Word Classification (Odd word out based on GK, Geography, Science, Meaning)',
          'Number Classification (Primes, Squares, Cubes, Sum of digits, Divisibility rules)',
          'Letter Cluster Classification (Positional gap between letters, Vowels count)',
          'Figural Classification (Number of sides, Internal symmetry, Clockwise dots)'
        ]
      },
      {
        id: 3,
        name: 'Series (Number, Alphabet, Figural)',
        tier1Qs: '2–4',
        tier2Qs: '4–6',
        combinedQs: '6–10',
        percentage: 15,
        priority: 'high',
        category: 'Verbal',
        importantNotes: 'Double-difference and alternating series are very common.',
        subtopics: [
          'Number Series (Difference series, Double difference, Multiplicative: ×2+1, Fibonacci)',
          'Alphabetical Series (Single, Double, Triple letter clusters, Skip pattern)',
          'Continuous Pattern Series (Letter repeat sequences e.g., a_b_a_b_)',
          'Mixed / Alphanumeric Series (Letters + Numbers + Symbols combination)',
          'Figural Series (Step-wise rotation: 45°, 90°, Shape movement in corners)'
        ]
      },
      {
        id: 4,
        name: 'Coding-Decoding',
        tier1Qs: '2–4',
        tier2Qs: '3–4',
        combinedQs: '5–8',
        percentage: 12,
        priority: 'high',
        category: 'Verbal',
        importantNotes: 'Memorize forward & reverse alphabet positions (EJOTY and opposites).',
        subtopics: [
          'Letter to Letter Coding (Forward/Backward shift, Cross coding, Reverse opposite pair)',
          'Letter to Number Coding (Alphabet positions sum, Letters count, Vowel weight)',
          'Substitution / Chinese Coding ("sky is blue" coded as "pa da na")',
          'Matrix Coding (Row and Column intersection coordinate lookup)',
          'Conditional Coding (Rules applied for vowel/consonant position conditions)'
        ]
      },
      {
        id: 5,
        name: 'Blood Relations',
        tier1Qs: '1–2',
        tier2Qs: '2–3',
        combinedQs: '3–5',
        percentage: 7,
        priority: 'med',
        category: 'Verbal',
        importantNotes: 'Coded relations (A + B means A is father of B) are frequent in Tier 2.',
        subtopics: [
          'Indicating / Dialogue based ("Pointing to a photograph, a man said...")',
          'Coded Blood Relations (A + B means Father, A - B means Sister, etc.)',
          'Family Tree Puzzles (Three generations, married couples and siblings)'
        ]
      },
      {
        id: 6,
        name: 'Direction & Distance',
        tier1Qs: '0–1',
        tier2Qs: '1–3',
        combinedQs: '1–4',
        percentage: 5,
        priority: 'low',
        category: 'Verbal',
        importantNotes: 'Shortest distance uses Pythagoras theorem; check shadow at sunrise/sunset.',
        subtopics: [
          'Cardinal (N, S, E, W) and Intercardinal (NE, NW, SE, SW) Directions',
          'Right and Left Turns (Clockwise 90°, Anti-clockwise 90°)',
          'Shortest Distance calculation using Pythagoras Theorem: √(a² + b²)',
          'Angular rotation movements (e.g., turns 135° clockwise, then 45° anti-clockwise)',
          'Shadow based questions (Sunrise shadow to West, Sunset to East)'
        ]
      },
      {
        id: 7,
        name: 'Ranking & Order',
        tier1Qs: '0–1',
        tier2Qs: '1–2',
        combinedQs: '1–3',
        percentage: 4,
        priority: 'low',
        category: 'Verbal',
        importantNotes: 'Total = Left + Right - 1; watch out for overlapping cases.',
        subtopics: [
          'Total Persons from Left and Right positions: Total = Left + Right - 1',
          'Position Interchanging between two persons in a line',
          'Overlapping vs Non-overlapping cases (Minimum persons in a row)',
          'Comparative Ranking (Taller/Shorter, Heavier/Lighter, Older/Younger)'
        ]
      },
      {
        id: 8,
        name: 'Syllogism',
        tier1Qs: '0–2',
        tier2Qs: '2–3',
        combinedQs: '2–5',
        percentage: 7,
        priority: 'med',
        category: 'Logical',
        importantNotes: 'New TCS questions focus heavily on "Only a few" and "Possibility".',
        subtopics: [
          'Standard Statements: All A are B, Some A are B, No A is B, Some A are not B',
          'Possibility Cases ("All A being B is a possibility")',
          '"Only a few" and "Only" statements (TCS Pattern)',
          'Complementary Pairs (Either-Or conditions: Some + No, All + Some not)'
        ]
      },
      {
        id: 9,
        name: 'Venn Diagrams',
        tier1Qs: '0–1',
        tier2Qs: '1–2',
        combinedQs: '1–3',
        percentage: 4,
        priority: 'low',
        category: 'Logical',
        importantNotes: 'Geometric Venn diagrams (Circle, Rectangle, Triangle intersections).',
        subtopics: [
          'Three-Entity Real Life Venn relationships (e.g., Doctors, Men, Musicians)',
          'Geometric Shape Identification (Circle = Artists, Square = Boys, Triangle = Athletes)',
          'Overlapping Regions Count (Only A, Both A and B but not C, All three)'
        ]
      },
      {
        id: 10,
        name: 'Statement & Conclusion',
        tier1Qs: '0–1',
        tier2Qs: '1–2',
        combinedQs: '1–3',
        percentage: 4,
        priority: 'low',
        category: 'Logical',
        importantNotes: 'Do not assume extra knowledge; rely strictly on given statement.',
        subtopics: [
          'Statement and Direct Conclusions',
          'Statement and Implicit Assumptions',
          'Statement and Course of Action',
          'Cause and Effect identification',
          'Assertion and Reason validation'
        ]
      },
      {
        id: 11,
        name: 'Mathematical Operations',
        tier1Qs: '0–2',
        tier2Qs: '1–3',
        combinedQs: '1–5',
        percentage: 6,
        priority: 'med',
        category: 'Logical',
        importantNotes: 'Interchanging signs and numbers to balance equation.',
        subtopics: [
          'Interchange of Mathematical Signs (+ with -, × with ÷)',
          'Interchange of Digits/Numbers to balance equality',
          'Symbol substitution (@ means +, # means ×, etc.)',
          'Applying VBODMAS after sign substitutions'
        ]
      },
      {
        id: 12,
        name: 'Non-Verbal Reasoning',
        tier1Qs: '2–4',
        tier2Qs: '2–4',
        combinedQs: '4–8',
        percentage: 11,
        priority: 'high',
        category: 'Non-Verbal',
        importantNotes: 'Element rotations and quadrant shifts.',
        subtopics: [
          'Figure Series & Progressions',
          'Clockwise & Counter-Clockwise element rotation (45°, 90°, 180°)',
          'Boundary movement of symbols along outer perimeter',
          'Inversion and Shading pattern transitions'
        ]
      },
      {
        id: 13,
        name: 'Mirror & Water Images',
        tier1Qs: '1–2',
        tier2Qs: '1–2',
        combinedQs: '1–3',
        percentage: 4,
        priority: 'low',
        category: 'Non-Verbal',
        importantNotes: 'Mirror flips left-right; Water flips top-bottom.',
        subtopics: [
          'Vertical Mirror Images (Left becomes Right, Right becomes Left)',
          'Horizontal Water Images (Top becomes Bottom, Bottom becomes Top)',
          'Capital & Lowercase Alphabet letters and Digits reflection',
          'Analog Clock Reflection problems (Mirror time = 11:60 - actual time)'
        ]
      },
      {
        id: 14,
        name: 'Paper Folding & Cutting',
        tier1Qs: '0–1',
        tier2Qs: '1–2',
        combinedQs: '1–3',
        percentage: 3,
        priority: 'low',
        category: 'Non-Verbal',
        importantNotes: 'Trace folds in reverse order to see symmetry punches.',
        subtopics: [
          'Square and Circular paper folded along dotted lines',
          'Hole punches and geometric cutouts',
          'Unfolding step-by-step reflection symmetry'
        ]
      },
      {
        id: 15,
        name: 'Embedded Figures',
        tier1Qs: '0–1',
        tier2Qs: '0–1',
        combinedQs: '0–2',
        percentage: 2,
        priority: 'low',
        category: 'Non-Verbal',
        importantNotes: 'Carefully note if rotation of figure is allowed or not.',
        subtopics: [
          'Finding target sub-figure hidden in complex patterns',
          'Conditions where Rotation is Allowed vs NOT Allowed'
        ]
      },
      {
        id: 16,
        name: 'Pattern Completion',
        tier1Qs: '0–1',
        tier2Qs: '1–2',
        combinedQs: '1–3',
        percentage: 3,
        priority: 'low',
        category: 'Non-Verbal',
        importantNotes: 'Fill the missing 1/4th quadrant.',
        subtopics: [
          'Missing Quadrant (1/4th) pattern matching',
          'Diagonal line continuation and arc symmetry matching'
        ]
      },
      {
        id: 17,
        name: 'Seating Arrangement',
        tier1Qs: '0–1',
        tier2Qs: '3–4',
        combinedQs: '3–5',
        percentage: 8,
        priority: 'high',
        category: 'Analytical',
        importantNotes: 'Major topic in Tier 2 Mains (3 to 4 questions).',
        subtopics: [
          'Linear Seating (Single row facing North, facing South, Parallel two rows)',
          'Circular Seating Arrangement (All facing centre / Facing outside / Mixed)',
          'Square & Rectangular Table Arrangement (Corner vs Side seating)'
        ]
      },
      {
        id: 18,
        name: 'Puzzle',
        tier1Qs: '0–1',
        tier2Qs: '3–5',
        combinedQs: '3–6',
        percentage: 9,
        priority: 'high',
        category: 'Analytical',
        importantNotes: 'Floor & Box stacking puzzles are heavily tested in Mains.',
        subtopics: [
          'Floor & Flat based Puzzles (Numbered floors with persons/professions)',
          'Day, Date & Month based Scheduling Puzzles',
          'Box Stacking & Shelf Puzzles',
          'Tabular Comparison Puzzles (Person, City, Car, Subject matching)'
        ]
      },
      {
        id: 19,
        name: 'Critical Thinking',
        tier1Qs: '0–1',
        tier2Qs: '0–1',
        combinedQs: '0–2',
        percentage: 2,
        priority: 'low',
        category: 'Analytical',
        importantNotes: 'Logical consistency of arguments.',
        subtopics: [
          'Extracting logical conclusions from paragraph statements',
          'Strong vs Weak Arguments evaluation',
          'Flaws in reasoning and hidden assumptions'
        ]
      },
      {
        id: 20,
        name: 'Emotional Intelligence',
        tier1Qs: '0–1',
        tier2Qs: '0–1',
        combinedQs: '0–2',
        percentage: 2,
        priority: 'low',
        category: 'Analytical',
        importantNotes: 'Situational decision making in public scenarios.',
        subtopics: [
          'Official scenario reaction tests',
          'Empathetic vs impulsive response evaluation in administrative duties'
        ]
      },
      {
        id: 21,
        name: 'Social Intelligence',
        tier1Qs: '0–1',
        tier2Qs: '0–1',
        combinedQs: '0–2',
        percentage: 2,
        priority: 'low',
        category: 'Analytical',
        importantNotes: 'Interpersonal resolution & civic responsibilities.',
        subtopics: [
          'Workplace and public conflict resolution questions',
          'Civic duty, ethical integrity and social awareness'
        ]
      },
      {
        id: 22,
        name: 'Word Building / Indexing',
        tier1Qs: '0–1',
        tier2Qs: '0–1',
        combinedQs: '0–2',
        percentage: 2,
        priority: 'low',
        category: 'Analytical',
        importantNotes: 'Dictionary order and word formation rules.',
        subtopics: [
          'Arranging words in Dictionary / Alphabetical Order',
          'Unscrambling jumbled letters into meaningful words',
          'Word formation from letters of a given master word (Can / Cannot be formed)'
        ]
      }
    ]
  },
  {
    id: 'english',
    name: 'English',
    shortName: 'English',
    fullName: 'English Language & Comprehension',
    totalTopics: 15,
    tier1TotalQs: 25,
    tier2TotalQs: 45,
    combinedTotalQs: 70,
    iconName: 'BookOpen',
    tip: 'RC + Cloze + Vocabulary = approx 50% of English paper. Learn 20 vocab words daily.',
    topics: [
      {
        id: 1,
        name: 'Grammar (Parts of Speech, Tense)',
        tier1Qs: '2–3',
        tier2Qs: '3–4',
        combinedQs: '5–7',
        percentage: 9,
        priority: 'high',
        category: 'Grammar',
        importantNotes: 'Subject-Verb agreement & Fixed prepositions are crucial.',
        subtopics: [
          'Nouns (Singular/Plural, Collective, Possessive apostrophe rules)',
          'Pronouns (Personal, Relative: who/whom/which/that, Reflexive, Reciprocal)',
          'Subject-Verb Agreement (Singular subject takes singular verb, either/or, neither/nor, as well as)',
          'Tenses (Continuous, Perfect, Perfect Continuous, Conditional sentences: If + had + V3)',
          'Adjectives & Degrees of Comparison (Latin adjectives: senior/junior to, elder/older)',
          'Adverbs (Placement, Inversion rules: Hardly, Scarcely, Seldom at beginning)',
          'Prepositions (Fixed prepositions: abstain from, abide by, accused of; Time/Place)',
          'Conjunctions (Correlative pairs: Not only... but also, Scarcely... when, No sooner... than)',
          'Articles (Definite article The rules, Indefinite A/An before vowel sounds)'
        ]
      },
      {
        id: 2,
        name: 'Error Spotting / Sentence Correction',
        tier1Qs: '2–3',
        tier2Qs: '5–6',
        combinedQs: '7–9',
        percentage: 12,
        priority: 'high',
        category: 'Grammar',
        importantNotes: 'High weightage in Tier 2 Mains (5 to 6 questions).',
        subtopics: [
          'Subject-Verb mismatch and Pronoun agreement errors',
          'Misplaced Modifiers and Dangling Participles',
          'Parallelism errors in sentence structures',
          'Redundancy & Superfluous expressions ("revert back", "cousin brother")',
          'Tense mismatch across dependent and main clauses',
          'Prepositional and Article omission or wrong usage'
        ]
      },
      {
        id: 3,
        name: 'Sentence Improvement',
        tier1Qs: '2–3',
        tier2Qs: '3–4',
        combinedQs: '5–7',
        percentage: 9,
        priority: 'med',
        category: 'Grammar',
        importantNotes: 'Substitute underlined part with the most accurate option.',
        subtopics: [
          'Replacing underlined clause with grammatically correct alternative',
          'Idiomatic phrasing improvements',
          'Choosing precise concise vocabulary over wordy phrases',
          '"No improvement" option identification'
        ]
      },
      {
        id: 4,
        name: 'Fill in the Blanks',
        tier1Qs: '1–4',
        tier2Qs: '3–4',
        combinedQs: '4–8',
        percentage: 9,
        priority: 'med',
        category: 'Grammar',
        importantNotes: 'Phrasal verbs and confusing homophones.',
        subtopics: [
          'Single Fillers and Double Fillers',
          'Contextual vocabulary fit & Confusing Words (Complement vs Compliment)',
          'Phrasal Verbs (Look into, Put up with, Break down, Turn down, Call off)',
          'Prepositional collocations and fixed usage'
        ]
      },
      {
        id: 5,
        name: 'Cloze Test',
        tier1Qs: '3–5',
        tier2Qs: '5–7',
        combinedQs: '8–12',
        percentage: 14,
        priority: 'high',
        category: 'Comprehension',
        importantNotes: 'Read full paragraph once before attempting options.',
        subtopics: [
          'Passage of 5 to 10 blanks testing reading flow and contextual coherence',
          'Tone identification of author (Critical, Informative, Sarcastic, Hopeful)',
          'Eliminating grammatically incompatible options',
          'Identifying logical connector words (However, Although, Moreover, Therefore)'
        ]
      },
      {
        id: 6,
        name: 'Reading Comprehension',
        tier1Qs: '5–7',
        tier2Qs: '8–10',
        combinedQs: '13–17',
        percentage: 22,
        priority: 'high',
        category: 'Comprehension',
        importantNotes: 'Single biggest topic in English (up to 17 questions across exams).',
        subtopics: [
          'Direct Fact-based questions from passage',
          'Central Idea & Main Theme identification',
          'Title of the Passage selection',
          'Inference and Author Tone analysis (Optimistic, Pessimistic, Dogmatic)',
          'Contextual Vocabulary (Meaning of word as used in line X)'
        ]
      },
      {
        id: 7,
        name: 'Synonyms',
        tier1Qs: '2–3',
        tier2Qs: '2–3',
        combinedQs: '4–6',
        percentage: 7,
        priority: 'med',
        category: 'Vocabulary',
        importantNotes: 'Learn via Root Words (cide, phobia, bene, mal).',
        subtopics: [
          'High frequency SSC PYQ vocabulary words',
          'Root Words Method (Prefixes: un-, dis-, mal-, bene-; Suffixes: -cide, -phobia)',
          'Context-dependent synonyms'
        ]
      },
      {
        id: 8,
        name: 'Antonyms',
        tier1Qs: '2–3',
        tier2Qs: '2–3',
        combinedQs: '4–6',
        percentage: 7,
        priority: 'med',
        category: 'Vocabulary',
        importantNotes: 'Watch out for words that sound positive but have negative meaning.',
        subtopics: [
          'Opposite meanings of formal and advanced vocabulary',
          'Antonyms formed using negative prefixes (in-, im-, non-, a-)',
          'Degree of opposition (Absolute opposites vs relative opposites)'
        ]
      },
      {
        id: 9,
        name: 'Idioms & Phrases',
        tier1Qs: '1–2',
        tier2Qs: '2–3',
        combinedQs: '3–5',
        percentage: 6,
        priority: 'med',
        category: 'Vocabulary',
        importantNotes: 'Study thematic idioms: animal, body parts, colors.',
        subtopics: [
          'Body parts idioms (Bite the bullet, Cost an arm and a leg, Cold feet)',
          'Color idioms (Once in a blue moon, Caught red-handed, Green with envy)',
          'Animal idioms (Dark horse, White elephant, Let the cat out of the bag)',
          'Action & Daily idioms (Spill the beans, Hit the nail on head, Burn midnight oil)'
        ]
      },
      {
        id: 10,
        name: 'One Word Substitution',
        tier1Qs: '1–2',
        tier2Qs: '2–3',
        combinedQs: '3–5',
        percentage: 6,
        priority: 'med',
        category: 'Vocabulary',
        importantNotes: 'Categories: government types, killings (-cide), manias, places.',
        subtopics: [
          'Persons & Professions (Philanthropist, Polyglot, Numismatist, Omniscient)',
          'Fields of Science & Study (Ornithology, Etymology, Cartography, Calligraphy)',
          'Government Systems (Democracy, Plutocracy, Oligarchy, Bureaucracy, Anarchy)',
          'Places (Arsenal, Aviary, Apiary, Sanctuary, Mortuary)',
          'Killings & Manias (Homicide, Regicide, Patricide; Pyromania, Kleptomania)'
        ]
      },
      {
        id: 11,
        name: 'Spelling Correction',
        tier1Qs: '1–2',
        tier2Qs: '1–2',
        combinedQs: '2–4',
        percentage: 5,
        priority: 'low',
        category: 'Vocabulary',
        importantNotes: 'Double letters (Accommodate, Millennium, Embarrassment).',
        subtopics: [
          'Words with double consonants (Occurred, Accommodation, Embarrassment, Millennium)',
          'Words with silent letters (Pneumonia, Phlegm, Subtle, Sovereign)',
          'ie vs ei confusion rules (Receive, Deceive, Believe, Relief)',
          'Suffix confusions (-able vs -ible, -ent vs -ant)'
        ]
      },
      {
        id: 12,
        name: 'Para Jumbles',
        tier1Qs: '0–3',
        tier2Qs: '2–3',
        combinedQs: '2–6',
        percentage: 6,
        priority: 'low',
        category: 'Comprehension',
        importantNotes: 'Identify mandatory noun-pronoun pairs and chronological clues.',
        subtopics: [
          'Mandatory Pairs identification (Noun followed by Pronoun, Cause & Effect)',
          'Locating Independent Opening Sentence',
          'Chronological & Transition Clues (Initially, Then, Finally, Subsequently)',
          'Acronym rule (Full expansion first, short abbreviation second)'
        ]
      },
      {
        id: 13,
        name: 'Active / Passive Voice',
        tier1Qs: '1–2',
        tier2Qs: '1–2',
        combinedQs: '2–4',
        percentage: 5,
        priority: 'low',
        category: 'Grammar',
        importantNotes: 'Formula-based questions; 100% accuracy topic.',
        subtopics: [
          'Tense conversion chart across all 8 passive tenses',
          'Interrogative sentences (Who wrote this? -> By whom was this written?)',
          'Imperative sentences (Do this -> Let this be done)',
          'Modal auxiliaries (can, could, should, must + be + V3)',
          'Sentences with two objects (Direct and Indirect)'
        ]
      },
      {
        id: 14,
        name: 'Direct / Indirect Narration',
        tier1Qs: '1–2',
        tier2Qs: '1–2',
        combinedQs: '2–4',
        percentage: 5,
        priority: 'low',
        category: 'Grammar',
        importantNotes: 'SON rule and time/place adverbs conversion.',
        subtopics: [
          'Reporting Verb rules (said to -> told, asked, requested, ordered, exclaimed)',
          'Tense shifts (Present to Past, Past Indefinite to Past Perfect)',
          'Pronoun shifts based on SON rule (Subject, Object, No change)',
          'Time & Place adverbs shift (now -> then, today -> that day, here -> there)',
          'Exclamatory and Optative sentences conversion'
        ]
      },
      {
        id: 15,
        name: 'Vocabulary Usage',
        tier1Qs: '1–2',
        tier2Qs: '1–2',
        combinedQs: '2–4',
        percentage: 4,
        priority: 'low',
        category: 'Vocabulary',
        importantNotes: 'Collocations and precise register.',
        subtopics: [
          'Standard English Collocations (Make a mistake, Do homework, Heavy rain)',
          'Connotations (Slender vs Skinny, Childlike vs Childish)',
          'Formal Register vs Informal Slang differentiation'
        ]
      }
    ]
  },
  {
    id: 'gk',
    name: 'GK / GS',
    shortName: 'GK',
    fullName: 'General Awareness',
    totalTopics: 20,
    tier1TotalQs: 25,
    tier2TotalQs: 25,
    combinedTotalQs: 50,
    iconName: 'Globe',
    tip: 'Current Affairs + Science + Polity = approx 40% of GK. Read newspapers daily and keep monthly notes.',
    topics: [
      {
        id: 1,
        name: 'History (Ancient)',
        tier1Qs: '1–2',
        tier2Qs: '1–2',
        combinedQs: '2–4',
        percentage: 6,
        priority: 'med',
        category: 'History',
        importantNotes: 'Harappan sites & Ashoka rock edicts.',
        subtopics: [
          'Indus Valley Civilization (Harappa, Mohenjodaro, Lothal dockyard, Great Bath, Seals)',
          'Vedic Period (Rigveda, Samaveda, Yajurveda, Atharvaveda, Sabha, Samiti, Upanishads)',
          'Buddhism & Jainism (Buddha life, 4 Buddhist Councils, Mahavira, Triratna, Sects)',
          'Mahajanapadas & Magadha Rise (Haryanka, Shishunaga, Nanda dynasties)',
          'Mauryan Empire (Chandragupta, Chanakya Arthashastra, Ashoka edicts, Kalinga War)',
          'Post-Mauryan Era (Kushanas, Kanishka, Satavahanas)',
          'Gupta Empire (Golden Age, Samudragupta, Chandragupta II, Kalidasa, Aryabhata)',
          'Harshavardhana & Sangam Age South Dynasties (Cholas, Pallavas, Chalukyas)'
        ]
      },
      {
        id: 2,
        name: 'History (Medieval)',
        tier1Qs: '1–2',
        tier2Qs: '1–2',
        combinedQs: '2–3',
        percentage: 5,
        priority: 'med',
        category: 'History',
        importantNotes: 'Delhi Sultanate dynasties and Mughal monuments.',
        subtopics: [
          'Arab & Turkish Invasions (Mahmud of Ghazni, Ghori, Battles of Tarain 1191, 1192)',
          'Delhi Sultanate (Slave, Khilji: Alauddin market reforms, Tughlaq, Sayyid, Lodi)',
          'Mughal Empire (Babur battles, Humayun, Akbar: Din-i-Ilahi, Navratnas, Shah Jahan)',
          'Vijayanagara & Bahmani Kingdoms (Harihara & Bukka, Krishnadevaraya, Hampi)',
          'Maratha Empire & Chhatrapati Shivaji Maharaj (Ashtapradhan, Chauth, Sardeshmukhi)',
          'Bhakti & Sufi Movements (Kabir, Guru Nanak, Mirabai, Nizamuddin Auliya)'
        ]
      },
      {
        id: 3,
        name: 'History (Modern)',
        tier1Qs: '1–2',
        tier2Qs: '1–2',
        combinedQs: '2–3',
        percentage: 5,
        priority: 'med',
        category: 'History',
        importantNotes: 'Revolt of 1857, Governor Generals, and Gandhian movements.',
        subtopics: [
          'Advent of Europeans & Carnatic Wars, Battle of Plassey 1757, Buxar 1764',
          'Governor Generals & Viceroys (Warren Hastings, Dalhousie Doctrine of Lapse, Ripon)',
          'Revolt of 1857 (Causes, Centers, Leaders: Mangal Pandey, Rani Lakshmibai)',
          'Socio-Religious Movements (Brahmo Samaj, Arya Samaj, Ramakrishna Mission)',
          'Indian National Congress (Foundation 1885, Moderates vs Extremists, Surat Split 1907)',
          'Gandhian Era (Champaran 1917, Non-Cooperation 1920, Civil Disobedience 1930, Quit India 1942)',
          'Revolutionary Movements (Bhagat Singh, Azad, Subhash Chandra Bose & INA)',
          'Independence & Partition Acts (Cabinet Mission, Mountbatten Plan, 1947 Act)'
        ]
      },
      {
        id: 4,
        name: 'Art & Culture',
        tier1Qs: '1–2',
        tier2Qs: '1–2',
        combinedQs: '2–3',
        percentage: 5,
        priority: 'med',
        category: 'Static',
        importantNotes: 'Classical dances, Gharanas, and UNESCO Heritage sites.',
        subtopics: [
          'Classical Dances of India (8 dances: Bharatnatyam, Kathak, Kathakali, Kuchipudi, etc.)',
          'Folk Dances of Indian States (Garba, Lavani, Bihu, Kalbelia, Cheraw, Rouf)',
          'Classical Music (Hindustani Gharanas vs Carnatic Music, Famous Instruments & Maestros)',
          'Fairs & Festivals (Kumbh, Pushkar, Hornbill, Pongal, Onam, Chhath, Losar)',
          'Temple Architecture (Nagara style North, Dravida South, Vesara mixed)',
          'UNESCO World Heritage Sites in India',
          'Traditional Indian Paintings (Madhubani, Warli, Pattachitra, Tanjore)'
        ]
      },
      {
        id: 5,
        name: 'Geography (India)',
        tier1Qs: '1–2',
        tier2Qs: '1–2',
        combinedQs: '2–3',
        percentage: 5,
        priority: 'med',
        category: 'Geography',
        importantNotes: 'Himalayan vs Peninsular river systems and major passes.',
        subtopics: [
          'Physiographic Divisions (Himalayas, Mountain Passes, Northern Plains, Peninsular Plateau)',
          'River Systems (Indus, Ganga, Brahmaputra, Godavari, Krishna, Cauvery, Narmada)',
          'Dams, Reservoirs & Waterfalls in India',
          'Indian Monsoon & Climate (Monsoon Mechanism, Western Disturbances)',
          'Soils of India (Alluvial, Black/Regur, Red, Laterite soils)',
          'Crops & Agriculture (Rabi, Kharif, Zaid crops; Green Revolution)',
          'National Parks, Wildlife Sanctuaries & Biosphere Reserves in India',
          'Mineral Resources & Transportation (Major Sea Ports, Dedicated Freight Corridors)'
        ]
      },
      {
        id: 6,
        name: 'Geography (World)',
        tier1Qs: '1–2',
        tier2Qs: '1–2',
        combinedQs: '2–3',
        percentage: 5,
        priority: 'med',
        category: 'Geography',
        importantNotes: 'Atmosphere layers and ocean currents.',
        subtopics: [
          'Solar System (Planets, Asteroid belt, Eclipses: Solar & Lunar)',
          'Earth Dimensions: Latitudes, Longitudes, International Date Line, Seasons',
          'Earth Interior (Crust, Mantle, Core, Discontinuities)',
          'Plate Tectonics, Earthquakes (P, S, L waves, Epicenter) & Volcanoes',
          'Atmosphere Layers (Troposphere, Stratosphere with Ozone, Mesosphere, Thermosphere)',
          'Ocean Currents (Warm vs Cold currents: Gulf Stream, Kuroshio, Labrador)',
          'Major Continents, Deserts, Mountain Ranges, Straits & Canals (Suez, Panama)'
        ]
      },
      {
        id: 7,
        name: 'Indian Polity & Constitution',
        tier1Qs: '2–3',
        tier2Qs: '3–4',
        combinedQs: '5–7',
        percentage: 12,
        priority: 'high',
        category: 'Polity',
        importantNotes: 'Fundamental Rights (Articles 12-35) & Writs under Art 32.',
        subtopics: [
          'Constituent Assembly, Drafting Committee, Preamble keywords',
          'Borrowed Features of Indian Constitution from other countries',
          'Fundamental Rights (Articles 12–35, Writs under Article 32 & 226)',
          'Directive Principles of State Policy (DPSP Articles 36–51) & Fundamental Duties (51A)',
          'President & Vice-President (Election, Powers, Impeachment Art 61, Pardoning Art 72)',
          'Prime Minister, Union Council of Ministers & Attorney General (Article 76)',
          'Parliament (Lok Sabha, Rajya Sabha, Speaker, Money Bill Art 110, Committees)',
          'Supreme Court of India (Articles 124–147) & High Courts',
          'Panchayati Raj (73rd Amendment) & Municipalities (74th Amendment)',
          'Constitutional Bodies (Election Commission Art 324, UPSC, CAG Art 148, Finance Commission Art 280)',
          'Key Amendments (42nd Mini-Constitution, 44th, 86th RTE, 101st GST)',
          'Emergency Provisions (National 352, President Rule 356, Financial 360)'
        ]
      },
      {
        id: 8,
        name: 'Economics (Basic)',
        tier1Qs: '1–2',
        tier2Qs: '1–2',
        combinedQs: '2–3',
        percentage: 5,
        priority: 'med',
        category: 'Economics',
        importantNotes: 'Demand-Supply curve and Inflation indexes (CPI, WPI).',
        subtopics: [
          'Law of Demand and Supply, Elasticity of Demand',
          'Market Types: Perfect Competition, Monopoly, Monopolistic, Oligopoly',
          'Inflation (CPI, WPI, Demand-pull, Cost-push, Stagflation, Deflation)',
          'National Income concepts (GDP, GNP, NNP, Real vs Nominal GDP)'
        ]
      },
      {
        id: 9,
        name: 'Indian Economy',
        tier1Qs: '1–2',
        tier2Qs: '1–2',
        combinedQs: '2–3',
        percentage: 5,
        priority: 'med',
        category: 'Economics',
        importantNotes: 'Monetary policy tools (Repo, Reverse Repo, CRR, SLR).',
        subtopics: [
          'Five Year Plans & NITI Aayog organizational structure',
          'RBI Monetary Policy (Repo Rate, Reverse Repo, CRR, SLR, Open Market Ops)',
          'Union Budget & Deficits (Fiscal Deficit, Revenue Deficit, Direct vs Indirect taxes)',
          'Indian Banking System (Commercial Banks, Small Finance, Payments Banks, NPAs)',
          'Poverty and Unemployment types (Disguised, Seasonal, Structural)',
          'Balance of Payments (BOP), Foreign Direct Investment (FDI) & Forex Reserves'
        ]
      },
      {
        id: 10,
        name: 'Physics',
        tier1Qs: '2–3',
        tier2Qs: '1–2',
        combinedQs: '3–5',
        percentage: 8,
        priority: 'high',
        category: 'Science',
        importantNotes: 'Optics, Newton laws, SI units and eye defects.',
        subtopics: [
          'SI Base Units, Derived Units, and Dimensional Formulas',
          'Newton 3 Laws of Motion, Linear Momentum, Friction, Projectile motion',
          'Universal Gravitation, Acceleration due to gravity "g" variation, Escape Velocity (11.2 km/s)',
          'Work, Power and Energy: Kinetic & Potential energy, Conservation law',
          'Fluid Mechanics: Surface Tension, Viscosity, Pascal Law, Archimedes Principle',
          'Thermodynamics: Heat scales, Specific heat, Latent heat, Modes of heat transfer',
          'Optics: Reflection, Refraction, Total Internal Reflection (Optical Fiber), Lenses & Eye defects',
          'Waves and Sound: Longitudinal vs Transverse, Doppler Effect, Ultrasonic waves',
          'Electricity: Ohm Law (V = IR), Series & Parallel resistors, Electric power',
          'Magnetism & Electromagnetism: Flemming Rules, Electromagnetic Induction'
        ]
      },
      {
        id: 11,
        name: 'Chemistry',
        tier1Qs: '2–3',
        tier2Qs: '1–2',
        combinedQs: '3–5',
        percentage: 8,
        priority: 'high',
        category: 'Science',
        importantNotes: 'Periodic table trends, Chemical names & common salts formulas.',
        subtopics: [
          'States of Matter (Solid, Liquid, Gas, Plasma, BEC)',
          'Atomic Structure: Protons, Neutrons, Electrons, Isotopes, Isobars, Isotones',
          'Modern Periodic Table Trends: Electronegativity, Ionization Energy, Atomic Radius',
          'Chemical Bonding: Ionic, Covalent, Coordinate, Hydrogen bonds',
          'Acids, Bases & Salts: pH scale, Indicators, Salts (Baking soda, Bleaching powder, Plaster of Paris)',
          'Metals & Non-Metals: Metallurgy, Reactivity Series, Important Ores and Alloys',
          'Carbon Allotropes (Diamond, Graphite, Fullerenes) & Hydrocarbons',
          'Everyday Chemistry: Polymers, Soaps, Detergents, Fertilizers, Explosives'
        ]
      },
      {
        id: 12,
        name: 'Biology',
        tier1Qs: '1–2',
        tier2Qs: '1–2',
        combinedQs: '2–4',
        percentage: 6,
        priority: 'med',
        category: 'Science',
        importantNotes: 'Vitamins deficiency, Human organ systems, and Cell organelles.',
        subtopics: [
          'Cell Biology: Organelles (Mitochondria powerhouse, Ribosomes, Lysosomes suicidal bags)',
          'Human Digestive System (Digestive enzymes: Ptyalin, Pepsin, Trypsin; Liver, Bile)',
          'Human Circulatory System (Heart chambers, Blood groups ABO, Rh factor, RBC/WBC)',
          'Human Respiratory System (Lungs, Alveoli, Hemoglobin oxygen transport)',
          'Human Nervous System (Brain parts: Cerebrum, Cerebellum, Medulla)',
          'Excretory & Endocrine Systems (Kidneys, Nephrons; Hormones: Insulin, Thyroid)',
          'Human Diseases: Bacterial, Viral, Protozoan (Malaria), Vitamin Deficiencies (A, B, C, D, E, K)',
          'Plant Physiology: Photosynthesis, Plant Hormones (Auxins, Cytokinins, Ethylene)',
          'Genetics: Mendel laws of inheritance, Chromosomes (46), DNA & RNA structure'
        ]
      },
      {
        id: 13,
        name: 'Environment & Ecology',
        tier1Qs: '0–1',
        tier2Qs: '1–2',
        combinedQs: '1–3',
        percentage: 4,
        priority: 'low',
        category: 'Science',
        importantNotes: 'Ramsar wetlands, 10% Energy law, and Global treaties.',
        subtopics: [
          'Ecosystem components (Biotic & Abiotic), Food Chain, Food Web, 10% Energy Law',
          'Ecological Pyramids (Number, Biomass, Energy)',
          'Environmental Pollution (Smog, Acid rain, Water, Soil pollution)',
          'Global Warming, Greenhouse Effect & Montreal Protocol for Ozone layer',
          'International Conventions (Kyoto Protocol, Paris Agreement, Ramsar Wetlands)',
          'Biodiversity Hotspots in India (Western Ghats, Indo-Burma, Himalayas)'
        ]
      },
      {
        id: 14,
        name: 'Current Affairs',
        tier1Qs: '3–5',
        tier2Qs: '4–6',
        combinedQs: '7–11',
        percentage: 18,
        priority: 'high',
        category: 'Current Affairs',
        importantNotes: 'Highest weightage in General Awareness (18% of paper). Last 8 months critical.',
        subtopics: [
          'National News: Key government policies, New bills passed, Major national projects',
          'International Summits & Conferences (G20, BRICS, SCO, ASEAN, NATO, Quad)',
          'Global Indices & India Rank (Human Development Index, Hunger Index, Press Freedom)',
          'Science & Space Tech (ISRO missions: Chandrayaan, Gaganyaan, Aditya L1; DRDO missiles)',
          'Key Appointments: Chief Ministers, Governors, Chief Justice, International CEOs',
          'Mergers, Acquisitions, Maharatna & Navratna enterprise additions'
        ]
      },
      {
        id: 15,
        name: 'Static GK',
        tier1Qs: '1–2',
        tier2Qs: '1–2',
        combinedQs: '2–3',
        percentage: 5,
        priority: 'med',
        category: 'Static',
        importantNotes: 'First in India & World, International Organizations Headquarters.',
        subtopics: [
          'First in India & World (First President, First Woman in Space, Nobel winners)',
          'Superlatives of India and World (Highest, Longest, Largest, Deepest)',
          'National Symbols of India (Emblem, Anthem, Song, Animal, Bird, Tree)',
          'Headquarters of International Bodies (UN, WHO, IMF, World Bank, UNESCO, WTO, ICC)',
          'Parliaments, Capitals & Currencies of world nations',
          'Famous Monuments and their Historical Builders'
        ]
      },
      {
        id: 16,
        name: 'Books & Authors',
        tier1Qs: '0–1',
        tier2Qs: '0–1',
        combinedQs: '0–2',
        percentage: 2,
        priority: 'low',
        category: 'Static',
        importantNotes: 'Booker prize winners and autobiographies of famous personalities.',
        subtopics: [
          'Ancient & Medieval Indian Classics (Arthashastra, Meghdoot, Baburnama, Ain-i-Akbari)',
          'Modern Freedom Movement Classics (Discovery of India, My Experiments with Truth)',
          'Recent Famous Books by Politicians, Sports Figures, and Booker Prize Winners'
        ]
      },
      {
        id: 17,
        name: 'Sports',
        tier1Qs: '1–2',
        tier2Qs: '1–2',
        combinedQs: '1–3',
        percentage: 4,
        priority: 'low',
        category: 'Static',
        importantNotes: 'Olympic medalists, Grand Slam winners, and trophy names.',
        subtopics: [
          'Olympic & Paralympic Games (Medals, Host cities, Indian champions)',
          'Commonwealth & Asian Games, National Games of India',
          'Cricket Tournaments (ICC World Cup, WTC, IPL, T20 World Cup; Ranji, Duleep Trophy)',
          'Grand Slam Tennis Tournaments (Australian, French Open, Wimbledon, US Open)',
          'Sports Terminology and Number of Players per team',
          'Famous Cups & Trophies (Durand Cup, Santosh Trophy, Thomas Cup, Uber Cup)'
        ]
      },
      {
        id: 18,
        name: 'Important Schemes',
        tier1Qs: '0–1',
        tier2Qs: '0–1',
        combinedQs: '1–2',
        percentage: 3,
        priority: 'low',
        category: 'Current Affairs',
        importantNotes: 'Ministry name, launch year, and target beneficiary eligibility.',
        subtopics: [
          'Central Flagship Schemes: PM Kisan, Ayushman Bharat PM-JAY, Jal Jeevan, PM Awas',
          'Financial Inclusion Schemes: PM Jan Dhan, PM Mudra, Atal Pension Yojana',
          'Women & Child Schemes: Beti Bachao Beti Padhao, Sukanya Samriddhi, POSHAN',
          'Employment & Skill: MGNREGA, PM SVANidhi, PM Vishwakarma Scheme'
        ]
      },
      {
        id: 19,
        name: 'Important Days',
        tier1Qs: '0–1',
        tier2Qs: '0–1',
        combinedQs: '0–2',
        percentage: 2,
        priority: 'low',
        category: 'Static',
        importantNotes: 'Dates and official themes of major world & national days.',
        subtopics: [
          'National & International Days across all 12 calendar months (Jan to Dec)',
          'Themes of Crucial Days (Environment Day June 5, Yoga Day June 21, Science Day Feb 28)'
        ]
      },
      {
        id: 20,
        name: 'Awards & Honours',
        tier1Qs: '0–1',
        tier2Qs: '0–1',
        combinedQs: '1–2',
        percentage: 3,
        priority: 'low',
        category: 'Static',
        importantNotes: 'Bharat Ratna, Gallantry awards, Nobel & Oscar winners.',
        subtopics: [
          'Civilian Awards: Bharat Ratna, Padma Vibhushan, Padma Bhushan, Padma Shri',
          'Gallantry Awards: Param Vir Chakra, Mahavir Chakra, Ashok Chakra',
          'Literary & Cinema Awards: Jnanpith, Sahitya Akademi, Saraswati Samman, Dadasaheb Phalke',
          'International Honours: Nobel Prizes, Booker Prize, Oscars, Grammy Awards'
        ]
      }
    ]
  }
];
