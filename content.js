/* =============================================================
   ILIAD site content
   -------------------------------------------------------------
   Edit any value below, save the file, refresh the website.
   The text in the website will update automatically.

   Format rules (a few):
   - Keep the quotes around the text — don't remove them.
   - Use a backslash before any quote inside the text:
       title: "She said \"hello\" yesterday",
   - To add an em-dash, just type — directly. Same with •, →, etc.
   - Don't remove the commas at the end of each line.
   - Don't rename the field names (the part before the colon).
     Those are wired into the HTML; renaming them breaks the link.
   - Bullet lists (`features`, `items`) are arrays — items separated
     by commas, each one wrapped in quotes:
       items: [
           "First bullet",
           "Second bullet",
       ],

   To extend coverage to more text on the site:
   1. Add a new field below (e.g. `something: "...",`).
   2. Find the matching element in an HTML file and add
      `data-content="path.to.field"` to it.
   ============================================================= */

window.SITE_CONTENT = {

    // ---- Shared (footer + copyright) ----
    brand: {
        tagline: "Where heroes are tested",
        description: "A modern performance testing facility drawing from the greatest epic ever told. Find your weakness before it finds you. Write your own legend.",
        copyright: "© 2026 Iliad. All rights reserved.",
        privacyLine: "Privacy Policy • Terms of Service",
    },

    contact: {
        email: "hello@iliadlab.com",
        phone: "+1 (442) 216-8774",
        location: "Vista, CA",
    },

    // ---- Top navigation (appears on every page) ----
    nav: {
        testing: "Testing",
        programs: "Programs",
        journey: "Journey",
        about: "About",
        pricing: "Pricing",
        contact: "Contact",
        bookAssessment: "Book Assessment",
    },

    // ---- Footer column titles + link labels ----
    footer: {
        testingTitle: "Testing",
        programsTitle: "Programs",
        contactTitle: "Contact",
        forcePlatesLink: "Force Plates",
        speedLink: "Speed Analysis",
        movementLink: "Movement Screening",
        coachingLink: "Performance Coaching",
        trainingLink: "Personal Training",
        correctiveLink: "Corrective Exercise",
        recoveryLink: "Recovery & Stretching",
        bookAssessmentLink: "Book Assessment",
    },

    // ---- Reusable button labels ----
    buttons: {
        beginJourney: "Begin Your Journey",
        learnMore: "Learn More",
        scheduleAssessment: "Schedule Assessment",
        readMethod: "Read the method",
        cardLearnMore: "Learn more",
    },

    // ---- Home page (index.html) ----
    home: {
        hero: {
            label: "Performance Testing Facility",
            title: "ILIAD",
            subtitle: "Find your weakness. Write your epic.",
            description: "The Iliad told the stories of warriors brought down by hidden weaknesses. We make sure your story ends differently. We find the flaw first — through force plates, timing gates, and movement analysis — then we build the discipline that erases it: coaching, training, recovery.",
        },

        stats: {
            stat1: { number: "15+", label: "Performance Metrics" },
            stat2: { number: "90", label: "Minute Assessment" },
            stat3: { number: "100%", label: "Data-Driven" },
        },

        quote: {
            text: "\"Achilles was the greatest warrior. One weakness brought him down. Every hero has an Achilles heel. We find yours first.\"",
            attribution: "The Iliad Principle",
        },

        // Testing summary section header on home
        testingSummary: {
            label: "What We Reveal",
            title: "Every weakness. Every imbalance. Every risk.",
            description: "Three testing protocols. One comprehensive picture. No vulnerability goes undetected.",
        },

        // The 3 testing summary cards on home
        testingCards: {
            card1: {
                number: "CHAPTER I",
                title: "Force Plate Testing",
                description: "Power asymmetries revealed through vertical jump analysis. Left versus right. Strong versus weak. The data exposes what compensation hides.",
                features: [
                    "Countermovement jump",
                    "Single-leg asymmetry",
                    "Reactive strength index",
                    "Isometric pull strength",
                ],
            },
            card2: {
                number: "CHAPTER II",
                title: "Speed Analysis",
                description: "Laser-timed velocity profiling. Where acceleration breaks down. Where top speed plateaus. Where deficits are revealed. Every phase of the sprint, measured.",
                features: [
                    "0–10 yard acceleration",
                    "10–20 yard transition",
                    "20–30 yard top speed",
                    "5-10-5 pro-agility",
                ],
            },
            card3: {
                number: "CHAPTER III",
                title: "Movement Screening",
                description: "Functional patterns expose compensation. Mobility restrictions predict injury. Seven movements reveal how well you can move.",
                features: [
                    "7-pattern FMS protocol",
                    "Video documentation",
                    "Asymmetry identification",
                    "Injury risk scoring",
                ],
            },
        },

        // Programs summary section header on home
        programsSummary: {
            label: "Where We Train",
            title: "From diagnosis to discipline.",
            description: "Four programs built on the same philosophy: every session begins with what the data revealed.",
        },

        // The 4 program summary cards on home
        programCards: {
            card1: {
                number: "DISCIPLINE I",
                title: "Performance Coaching",
                description: "One-on-one programming for the competitive athlete. Built from your assessment data, calibrated to your sport, targeted at the limiters we found.",
                features: [
                    "Sport-specific programming",
                    "Weekly 1:1 sessions",
                    "Continuous data tracking",
                    "Off-season and in-season planning",
                ],
            },
            card2: {
                number: "DISCIPLINE II",
                title: "Personal Training",
                description: "General strength training built on the same diagnostic foundation. The purpose: improving overall function and longevity.",
                features: [
                    "Strength and conditioning blocks",
                    "Movement-quality emphasis",
                    "Goal-aligned programming",
                    "Flexible session frequency",
                ],
            },
            card3: {
                number: "DISCIPLINE III",
                title: "Corrective Exercise",
                description: "Targeted intervention for the asymmetries the screen revealed. Restoring left-right balance, mobility, and movement integrity.",
                features: [
                    "Asymmetry remediation",
                    "Mobility programming",
                    "Pattern correction",
                    "Re-screen validation",
                ],
            },
            card4: {
                number: "DISCIPLINE IV",
                title: "Recovery & Stretching",
                description: "Assisted stretching and structured recovery to extend your training capacity. The work between the work.",
                features: [
                    "Assisted stretching",
                    "Mobility flow sessions",
                    "Soft-tissue work",
                    "Recovery protocols",
                ],
            },
        },

        // Journey summary section header on home
        journeySummary: {
            label: "Your Epic",
            title: "Every hero's journey has four acts",
            description: "From unknown to tested. From vulnerable to optimized. From athlete to legend.",
        },

        // The 4 journey-step circles on home
        journeySteps: {
            step1: {
                roman: "I",
                title: "Assessment",
                description: "90 minutes. Three protocols. Complete biomechanical analysis revealing every asymmetry and limitation.",
            },
            step2: {
                roman: "II",
                title: "Analysis",
                description: "Comprehensive report with percentile rankings, injury risk factors, and performance limiters identified.",
            },
            step3: {
                roman: "III",
                title: "Optimization",
                description: "Targeted intervention. Corrective programming. Monthly re-testing validates progress and refines approach.",
            },
            step4: {
                roman: "IV",
                title: "Mastery",
                description: "Weakness eliminated. Performance optimized. The athlete you were meant to be, fully realized.",
            },
        },

        cta: {
            title: "Write Your Epic",
            subtitle: "Every legend begins with a single step",
        },
    },

    // ---- Testing page (testing.html) ----
    testing: {
        header: {
            label: "The Diagnostic",
            title: "Testing",
            subtitle: "Three protocols. One complete picture.",
            description: "A 90-minute assessment built to expose what compensation has been hiding. Force plates measure power and asymmetry. Laser gates capture velocity in milliseconds. A seven-pattern screen reveals the movement quality underneath. Together they produce a profile no single test can.",
        },

        forcePlates: {
            number: "CHAPTER I",
            title: "Force Plate Testing",
            lead: "Every athlete has a stronger side. Most don't know which one — until it breaks. Force plate testing puts numbers on what asymmetries have been hiding for years.",
            measureHead: "What we measure",
            measureItems: [
                "Countermovement jump (CMJ) — peak force, peak power, jump height",
                "Single-leg jump asymmetry — left vs. right force production",
                "Reactive strength index — stretch-shortening cycle efficiency",
                "Isometric mid-thigh pull — maximum force in a controlled position",
                "Concentric / eccentric phase splits — where the asymmetry actually lives",
                "Rate of force development — how quickly you achieve peak force",
            ],
            howItWorksHead: "How it works",
            howItWorksProse: "Three tests per protocol on dual force plates sampling at 1000Hz. The software produces a side-by-side comparison and benchmarks results against sport-specific norms. You leave with a written report; we keep a baseline for comparison on the next visit.",
            bestForHead: "Best for",
            bestForProse: "Athletes returning from lower-body injury. Performers whose results have plateaued. Combine and pro-day prep. Teams establishing a roster baseline. Anyone whose training depends on jumping, sprinting, or single-leg power.",
        },

        speed: {
            number: "CHAPTER II",
            title: "Speed Analysis",
            lead: "Speed is the most expensive trait in sport — and the easiest to misdiagnose. A slow time might be an acceleration problem, a transition problem, a top-speed problem, or a change-of-direction problem. Each one demands a different fix. We measure all four.",
            measureHead: "What we measure",
            measureItems: [
                "0–10 yard acceleration — pure start power and initial drive",
                "10–20 yard transition — how efficiently you build to top speed",
                "20–30 yard top speed — peak velocity at full extension",
                "5-10-5 pro-agility — change of direction under deceleration load",
                "Phase splits — where in the sprint your speed is actually being lost",
            ],
            howItWorksHead: "How it works",
            howItWorksProse: "Laser timing gates capture velocity at four checkpoints — 0, 10, 20, and 30 yards — for three split times. The 5-10-5 pro-agility adds a change-of-direction layer. Splits are compared against position and age norms so you know whether your problem is the start, the build, the top end, or turning under speed.",
            bestForHead: "Best for",
            bestForProse: "Field and court athletes. Combine prep. Return-to-play after lower-body injury. Any athlete who suspects their training is improving the wrong phase of speed.",
        },

        movement: {
            number: "CHAPTER III",
            title: "Movement Screening",
            lead: "Pain hides. Compensation works — until it doesn't. The screen finds the patterns your body has been protecting against, before they become the reason you sit out a season.",
            measureHead: "What we measure",
            measureItems: [
                "Seven-pattern Functional Movement Screen — squat, hurdle, lunge, reach, raise, push, rotation",
                "Composite asymmetry score — left-vs-right pattern integrity",
                "Joint-level mobility limitations — ankle, hip, thoracic, shoulder",
                "Video documentation — every pattern captured for review",
                "Injury-risk scoring — composite below threshold flags elevated risk",
            ],
            howItWorksHead: "How it works",
            howItWorksProse: "Seven movement tests, each scored zero to three. Asymmetries and limitations are flagged for the corrective program. Video is reviewed with you so you see what we see — compensation made visible.",
            bestForHead: "Best for",
            bestForProse: "Anyone with a soft-tissue injury history. Athletes preparing for high-volume training cycles. Returning competitors whose movement still feels \"off\" without a clear reason why.",
        },

        cta: {
            title: "Begin the Diagnostic",
            subtitle: "90 minutes. The full picture.",
        },
    },

    // ---- Programs page (programs.html) ----
    programs: {
        header: {
            label: "Where We Train",
            title: "Programs",
            subtitle: "From diagnosis to discipline.",
            description: "Four programs, one philosophy: every session begins with what the data revealed. Performance coaching for the competitor. Personal training for the long game. Corrective work for the asymmetries the screen found. Recovery for the work between the work.",
        },

        performanceCoaching: {
            number: "DISCIPLINE I",
            title: "Performance Coaching",
            lead: "One-on-one programming for the competitive athlete. Calibrated to your sport, built from your assessment data, targeted at the limiters we found.",
            includedHead: "What's included",
            includedItems: [
                "Sport-specific programming — strength, power, speed, conditioning by season",
                "Weekly 1:1 coached sessions on the floor",
                "Continuous data tracking — re-tested key metrics every 4–6 weeks",
                "Off-season build, in-season maintenance, return-to-play protocols",
                "Direct line to your coach between sessions for adjustments",
            ],
            howItWorksHead: "How it works",
            howItWorksProse: "We start with your assessment results and your competitive calendar. Programming is delivered week by week and adjusted on the fly based on training response. Every six weeks we re-test the metrics that mattered most to make sure the program is doing what it claimed it would.",
            bestForHead: "Best for",
            bestForProse: "Competitive athletes — high school, collegiate, or post-collegiate — whose performance has measurable consequences. Combine prep. Pro-day prep. Athletes in-season who need a coach paying attention to load instead of guessing.",
        },

        personalTraining: {
            number: "DISCIPLINE II",
            title: "Personal Training",
            lead: "General strength training built on the same diagnostic foundation. The purpose: improving overall function and longevity.",
            includedHead: "What's included",
            includedItems: [
                "Strength and conditioning blocks — progressed over training cycles",
                "Movement-quality emphasis — no rep is just a rep",
                "Goal-aligned programming — fat loss, strength, capacity, or all three",
                "Flexible session frequency — one to four times per week",
                "Optional re-assessments every 3–6 months to track function over time",
            ],
            howItWorksHead: "How it works",
            howItWorksProse: "The same diagnostic that powers performance coaching also gives us a starting point for general training. Sessions are coached in person; programming respects what the screen and force plates told us about how your body actually moves.",
            bestForHead: "Best for",
            bestForProse: "Adults who want to train seriously but aren't preparing for a competition. Former athletes who still want to move like one. Anyone whose training history is \"I've tried a few things\" and wants someone with data to take it from here.",
        },

        correctiveExercise: {
            number: "DISCIPLINE III",
            title: "Corrective Exercise",
            lead: "Targeted intervention for the asymmetries the screen revealed. Restoring left-right balance, mobility, and movement integrity — before they become injuries.",
            includedHead: "What's included",
            includedItems: [
                "Asymmetry remediation — programming attacks the specific imbalance",
                "Joint-level mobility work — wherever the screen flagged restriction",
                "Pattern correction — squat, hinge, lunge, push, pull, rotation",
                "Re-screen validation — you don't graduate until the score reflects it",
            ],
            howItWorksHead: "How it works",
            howItWorksProse: "A focused 4-to-12 week block, often run alongside another program. The work is specific: only the patterns the screen flagged, only until they clear. Then the corrective fades into the warm-up of your next training cycle.",
            bestForHead: "Best for",
            bestForProse: "Anyone returning from injury. Athletes whose screen score put them in elevated risk. Lifters whose squat or deadlift has plateaued because of a mobility limitation they've been bracing through.",
        },

        recovery: {
            number: "DISCIPLINE IV",
            title: "Recovery & Stretching",
            lead: "Assisted stretching and structured recovery to extend your training capacity. The work between the work.",
            includedHead: "What's included",
            includedItems: [
                "Assisted stretching — table-based, practitioner-guided",
                "Mobility flow sessions — guided movement through full ranges",
                "Soft-tissue work — targeted to areas the screen flagged or training has loaded",
                "Recovery protocols — programmed alongside your training week",
            ],
            howItWorksHead: "How it works",
            howItWorksProse: "45- or 60-minute sessions, scheduled around your training. Each session opens with a quick check-in on what's tight, what's sore, and what training is coming up — then the work is built around that.",
            bestForHead: "Best for",
            bestForProse: "Athletes in heavy training blocks. In-season competitors managing accumulated load. Adults whose desk work is undoing what their training built. Anyone whose best progress is currently capped by how fast they recover.",
        },

        cta: {
            title: "Start with the Data",
            subtitle: "Every program begins with the assessment",
        },
    },

    // ---- Journey page (journey.html) ----
    journey: {
        header: {
            label: "The Method",
            title: "Journey",
            subtitle: "Test before you train.",
            description: "The Iliad is full of warriors who fell to a weakness no one had measured. Every body has one. Most never know what theirs is — until it stops them. We start somewhere different: we find the flaw first, then we train the athlete it lives in.",
        },

        principle: {
            number: "PRINCIPLE",
            title: "Most training is hope. Ours is method.",
            lead: "Without measurement, training is guessing in expensive shoes — reps you can't tie to outcomes, programs that \"feel right,\" adaptations you assume happened, cycles you finish without knowing what they did.",
            sub1Head: "Why we measure",
            sub1Prose: "Effort is honest. Data is honest. Most programming is neither. We don't leave your performance to a guessing game. We trust force curves, split times, and screen scores. Numbers don't flatter; they describe. And what we describe, we can change.",
            sub2Head: "What goes unmeasured",
            sub2Prose: "Every athlete who got hurt in a way that surprised them was carrying the answer the whole time. Force plates allow us to see asymmetries. The screen shows structural limitations.",
            sub3Head: "The cost of skipping it",
            sub3Prose: "Assessment is not an introduction to training. It is the foundation of training. Skipping it is not faster — it is more expensive. Paid in injuries, paid in plateaus, paid in cycles spent driving the wrong adaptation hard.",
        },

        process: {
            number: "PROCESS",
            title: "Four acts, in order.",
            lead: "Every athlete passes through the same four stages. The order doesn't change. The depth at each stage does.",
            act1Head: "Act I — Assessment",
            act1Prose: "Ninety minutes. Three protocols. The plates record at 1000Hz; the screen is filmed; the gates capture velocity at multiple checkpoints. Force production, left and right. Speed across three phases. Movement quality across seven patterns. Nothing is interpreted from feel — every conclusion has a number behind it.",
            act2Head: "Act II — Analysis",
            act2Prose: "What separates analysis from data is the question we ask. We don't ask \"how do you compare?\" — we ask \"what is the limiter?\" Every athlete has one. Sometimes it's eccentric strength. Sometimes it's hip mobility. Sometimes it's a 38% asymmetry the athlete never knew they had. We find the bottleneck — not the long list of things that could be improved, but the one or two that, fixed, change everything else.",
            act3Head: "Act III — Optimization",
            act3Prose: "Programs built on assessment data don't look like programs built without it. They aren't shorter. They're more specific. A general strength block becomes \"eccentric loading on the weaker leg, mobility work for the limited side, conditioning at the heart rate aligned to the actual aerobic ceiling we measured.\" Every set has a reason behind it. Nothing is there because someone else's program had it.",
            act4Head: "Act IV — Mastery",
            act4Prose: "Mastery is not a finish line. It's a state where the limiter is no longer the limiter. Your weakest link has caught up to the rest, and the system as a whole has moved up a tier. From there, the next limiter shows itself — and we test again. The cycle is not a hierarchy with a top. It is a spiral, and the question is always: what is bending the curve right now?",
        },

        evidence: {
            number: "WHAT THE RESEARCH SHOWS",
            title: "Three findings that built our method.",
            lead: "These aren't anecdotes. They're patterns the sports-science literature has shown across decades of research — and they shape every assessment, program, and re-test we run.",
            performanceHead: "Calibrated training outproduces generic training",
            performanceProse: "The strength and conditioning literature is consistent: programming individualized against measured profile produces larger gains than uncalibrated programs of equal volume. Velocity-based load prescription beats fixed percentages of estimated 1RM. Force-plate-guided plyometric work outpaces volume-matched generic plyo. Sprint training aimed at the limiting phase moves splits faster than generic acceleration drills. The mechanism is the same every time — work pointed at the real gap outperforms work pointed at a guess.",
            injuryHead: "Asymmetry detected is asymmetry that doesn't become injury",
            injuryProse: "A growing body of research links measurable inter-limb asymmetry — in jump height, force production, single-leg balance, range of motion — to elevated lower-extremity injury risk. The exact threshold varies by sport and metric, but the pattern repeats: athletes carrying significant left-right imbalances are more likely to be hurt under load. Pre-season movement screening, force-plate asymmetry profiling, and structured corrective work in response to the data have each been associated with reduced time-loss injuries in published research. The screen finds what compensation has been hiding. The corrective work clears it before the season starts.",
            foundationHead: "Athletic foundation is what every later quality is built on",
            foundationProse: "Long-term athletic development models — refined over decades of applied research — converge on a single principle: athletes built on a measured foundation of strength, mobility, and movement quality outlast athletes who specialize on top of unknowns. The sport-specific qualities — speed, power, reactive ability — sit on top of more general capacities. When those capacities are profiled and developed deliberately, peak performance arrives sooner, plateaus less often, and lasts longer. When they aren't, ceilings appear earlier than they should — for reasons the athlete could have seen coming if anyone had been measuring.",
            synthesisHead: "What the evidence asks of us",
            synthesisProse: "Performance, injury risk, and athletic longevity each respond to the same intervention — measure, then act on what the measurement showed. The literature doesn't claim training without data is impossible. It claims training with data is more efficient and more durable. The case for assessment isn't ideological. It's empirical. Three threads of research arrive at the same conclusion: data is the edge.",
        },

        cycle: {
            number: "THE DISCIPLINE",
            title: "The cycle is the practice.",
            lead: "We test at the start. We test six weeks in. We test six weeks after that. Forever. The diagnostic is not a gate you pass through once — it is the heartbeat of how we train.",
            retestHead: "Re-testing is how we know",
            retestProse: "There is a comfortable lie in training: that if you put in the work, the work pays off. It often does. But often is not always, and \"often\" is not a method. Re-testing is how we know — not how we hope, not how we feel — that what we are doing is working. When the numbers move, we keep going. When they don't, we change.",
            surviveHead: "Programs that survive contact with data",
            surviveProse: "Most training programs would not survive the test of being measured every six weeks. Ours have to. If a block of work didn't produce the change we predicted, something in the model was wrong — the dose, the exercise selection, the recovery, the prioritization. We rebuild. We don't double down on the bet that failed.",
            athleteHead: "The athlete you become",
            athleteProse: "Athletes who train this way develop a different relationship with their own performance. They stop asking \"did the workout feel hard?\" and start asking \"did the metric move?\" They stop trusting feeling alone, because feeling is seasonal. They trust the trend. The trend doesn't lie. The trend is the athlete you are actually becoming.",
        },

        cta: {
            title: "Begin the Journey",
            subtitle: "It starts with one ninety-minute decision",
        },
    },

    // ---- About page (about.html) ----
    about: {
        header: {
            label: "About",
            title: "ILIAD",
            subtitle: "Built by practitioners who got tired of training without data.",
            description: "ILIAD is a performance testing and training facility in San Diego. We test what other gyms guess at, and we program from data instead of templates. The goal isn't to be the loudest voice in the room — it's to be the most accurate one.",
        },

        story: {
            number: "THE STORY",
            title: "Why ILIAD exists.",
            lead: "We watched too many athletes do everything right and still get hurt — or train for years and still plateau. The pattern was always the same. They were working hard at the wrong target, because nobody had measured what the right target actually was.",
            sub1Head: "The frustration",
            sub1Prose: "Coaches working from intuition. Programs written for an average athlete who doesn't exist. Athletes spending years grinding on weaknesses they didn't know they had. Force plates and timing gates exist; movement screens exist; performance science exists. But most facilities don't use them. We wanted to build the place that does.",
            sub2Head: "The standard",
            sub2Prose: "Every athlete who walks through the door gets measured before they get programmed. Every program is calibrated against what the data showed. Every six weeks we re-test to see whether the work is producing the change we expected. The standard isn't fancy — it's just consistent. Most places don't hold to it. We do.",
        },

        team: {
            number: "THE TEAM",
            title: "Who you'll work with.",
            lead: "ILIAD is run by a small team of practitioners with deep backgrounds in strength and conditioning, sports medicine, and performance science. Real people, real credentials, on the floor with you.",
            member1Name: "[Founder Name]",
            member1Bio: "[Role / title]. [Credentials — e.g. CSCS, CSCCa, MS in Exercise Science]. [Years of experience] working with [population — collegiate, professional, tactical, etc.]. [Brief background — where trained, who they've worked with, what they specialize in.] [Optional one-line on what drives them or the philosophy they bring.]",
            member2Name: "[Second Practitioner Name]",
            member2Bio: "[Role / title]. [Credentials]. [Years of experience]. [Brief background and specialty]. [Optional philosophy line.]",
            member3Name: "[Third Practitioner / Coach]",
            member3Bio: "[Role / title]. [Credentials]. [Brief background]. [Specialty / focus.]",
        },

        facility: {
            number: "THE FACILITY",
            title: "What we built.",
            lead: "A purpose-built testing and training space — not a gym with a corner cleared out for assessments. Every piece of equipment was chosen because it produces data we can act on.",
            sub1Head: "Testing equipment",
            sub1Prose: "Dual force plates sampling at 1000Hz for jump and isometric protocols. Laser timing gates for sprint and change-of-direction work. Video capture for movement screens. Heart-rate and metabolic profiling tools. Everything calibrated, everything documented, every reading saved to your file.",
            sub2Head: "Training space",
            sub2Prose: "Open floor for sprint work and corrective patterning. Strength platforms with calibrated bars and plates. Mobility table for assisted stretching and soft-tissue sessions. The space supports the four programs the assessment funnels into — coaching, training, corrective, recovery — without compromise.",
        },

        approach: {
            number: "THE APPROACH",
            title: "How we're different.",
            lead: "Most performance facilities sell a system. We sell the diagnostic that decides which system you need. The order matters — and almost nobody else gets it right.",
            sub1Head: "Assessment first",
            sub1Prose: "We don't sell you a program before we measure you. The assessment isn't an upsell or a warm-up — it's the foundation of every recommendation we make. If we can't show you what the data says, we won't tell you what to do.",
            sub2Head: "Calibrated, not generic",
            sub2Prose: "Every program is built from your data, not from a template. Two athletes with the same goal often get very different programs because their assessment profiles look different. The work follows what the numbers reveal.",
            sub3Head: "Re-tested, not assumed",
            sub3Prose: "Every six weeks we re-test the metrics that matter. If the program isn't producing the change we expected, we change the program. We don't double down on a bet that isn't paying off.",
        },

        cta: {
            title: "Come Test With Us",
            subtitle: "The first ninety minutes change the next ten years",
        },
    },

    // ---- Pricing page (pricing.html) ----
    pricing: {
        header: {
            label: "Investment",
            title: "Pricing",
            subtitle: "Transparent. Outcome-driven.",
            description: "Every engagement begins with the assessment. From there, you choose how deep you want to go. No long contracts; no surprise add-ons. The pricing is what's on this page.",
        },

        assessment: {
            number: "TIER I",
            title: "The Assessment",
            lead: "The 90-minute diagnostic. The foundation of everything that follows. <strong>$100</strong> — single session, no commitment beyond the visit.",
            includedHead: "What's included",
            includedItems: [
                "Full force-plate protocol — CMJ, single-leg, isometric pull",
                "Speed protocol — 0–10 / 10–20 / 20–30 yard splits + 5-10-5",
                "Seven-pattern Functional Movement Screen with video review",
                "Written report with percentile rankings and identified limiters",
                "30-minute results review session within one week",
                "Baseline saved to your file for future re-tests",
            ],
            notesHead: "Notes",
            notesProse: "The assessment is a one-time fee. There is no subscription, no commitment, and no requirement to enroll in a program afterward. Many athletes book the assessment alone, take the report to their existing coach or program, and return six months later for a re-test.",
        },

        programs: {
            number: "TIER II",
            title: "Programs",
            lead: "Ongoing training built from your assessment data. Monthly engagement, cancel anytime. <strong>$200–$300 / month</strong> depending on program and session frequency.",
            coachingHead: "Performance Coaching",
            coachingProse: "<strong>$[XXX] / month.</strong> Weekly 1:1 coached sessions, sport-specific programming, continuous data tracking, re-tests every 4–6 weeks. For competitive athletes whose performance has measurable consequences.",
            trainingHead: "Personal Training",
            trainingProse: "<strong>$[XXX] / month</strong> at 2x weekly, <strong>$[XXX] / month</strong> at 3–4x weekly. General strength training built on your diagnostic foundation, for adults who want to train seriously without competition prep.",
            correctiveHead: "Corrective Exercise",
            correctiveProse: "<strong>$[XXX] / month</strong> for a focused 4–12 week block. Targeted intervention for the asymmetries the screen revealed; runs alongside another program until the patterns clear.",
            recoveryHead: "Recovery & Stretching",
            recoveryProse: "<strong>$30 per session</strong> (30 min) or <strong>$60 per session</strong> (60 min). Available as drop-ins or as a recovery package alongside any program.",
        },

        bundles: {
            number: "TIER III",
            title: "Bundles & Re-tests",
            lead: "For athletes who already know they want the full system, or teams running roster-wide assessments. Discounted when bundled.",
            foundationHead: "The Foundation Bundle",
            foundationProse: "<strong>$[XXX].</strong> Initial assessment + first month of programming + a 6-week re-assessment. The most common starting point for athletes new to data-driven training.",
            retestHead: "Re-Assessment",
            retestProse: "<strong>$[XX]</strong> for athletes returning for a follow-up assessment. Discounted from the initial rate. Included free in monthly programs at the 6-week interval.",
            teamHead: "Team / Roster Pricing",
            teamProse: "Custom pricing for teams testing 10+ athletes. Includes a team-level summary report identifying roster-wide injury risk and performance limiters. <a href=\"mailto:hello@iliadlab.com\">Contact us for a quote.</a>",
        },

        faq: {
            number: "FAQ",
            title: "Common questions.",
            q1Head: "Do I have to enroll in a program?",
            q1Prose: "No. The assessment is a one-time fee with no obligation. You can take the report and use it however you want — with us, with your existing coach, or on your own.",
            q2Head: "Do you offer payment plans?",
            q2Prose: "Monthly programs are billed monthly. The Foundation Bundle and team rates can be split into 2–3 payments — <a href=\"mailto:hello@iliadlab.com\">ask us</a> when you book.",
            q3Head: "What does the assessment include vs. cost extra?",
            q3Prose: "The price you see covers everything listed under \"What's included\" above — full protocols, written report, video review, and the results consult. There are no upsells during the assessment itself.",
            q4Head: "What if I'm not local?",
            q4Prose: "The assessment requires you to be on-site for the testing — no remote option for that. Once you have a baseline report, follow-up programming and check-ins can be delivered remotely; re-tests still require an in-person visit.",
        },

        cta: {
            title: "Start with the Assessment",
            subtitle: "Every program begins with the data",
        },
    },

    // ---- Book page (book.html) ----
    book: {
        header: {
            label: "Begin",
            title: "Book Your Assessment",
            subtitle: "Ninety minutes that recalibrate your training.",
            description: "Fill out the form below. We'll be in touch within 24 hours to confirm a time that works for you.",
        },
    },

};
