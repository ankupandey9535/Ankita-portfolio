/* ==========================================================================
   Ankita Pandey - Portfolio Interactive Application Logic
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
    initNavigation();
    initExperienceFilter();
    initWorkflowSimulator();
    initResumeModal();
    initContactForm();
    initMetricsCounter();
});

/* --------------------------------------------------------------------------
   Navigation & Scroll Handling
   -------------------------------------------------------------------------- */
function initNavigation() {
    const navbar = document.querySelector('.navbar');
    const navLinks = document.querySelectorAll('.nav-links a');
    const sections = document.querySelectorAll('section[id]');
    
    // Add background shadow on scroll
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.style.boxShadow = '0 20px 40px rgba(0,0,0,0.7)';
        } else {
            navbar.style.boxShadow = '0 15px 35px rgba(0,0,0,0.5)';
        }
        
        // Active link tracking
        let currentSection = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 120;
            const sectionHeight = section.offsetHeight;
            if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
                currentSection = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${currentSection}`) {
                link.classList.add('active');
            }
        });
    });
}

/* --------------------------------------------------------------------------
   Experience Filter Functionality
   -------------------------------------------------------------------------- */
function initExperienceFilter() {
    const filterBtns = document.querySelectorAll('.filter-btn');
    const timelineItems = document.querySelectorAll('.timeline-item');

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const filterValue = btn.getAttribute('data-filter');

            timelineItems.forEach(item => {
                const categories = item.getAttribute('data-category').split(' ');
                if (filterValue === 'all' || categories.includes(filterValue)) {
                    item.style.display = 'block';
                    item.style.animation = 'fadeIn 0.4s ease forwards';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });
}

/* --------------------------------------------------------------------------
   Interactive CMS Workflow Simulator
   -------------------------------------------------------------------------- */
const workflowStepsData = [
    {
        step: 1,
        title: '1. Ingestion & Platform Migration',
        description: 'Large-scale ingestion of enterprise web assets from legacy SharePoint into MySupport and Contentful headless CMS. Ensuring data integrity and mapping clean content models.',
        checklist: [
            'Extracted 10,000+ legacy content assets from SharePoint',
            'Mapped structural JSON content models in Contentful',
            'Ensured 100% data integrity during batch migration',
            'Cross-validated baseline links and document hierarchy'
        ],
        badge: 'SharePoint ➔ Contentful / MySupport'
    },
    {
        step: 2,
        title: '2. Metadata & Taxonomy Enrichment',
        description: 'Applying standardized metadata schemas, corporate taxonomy rules, and SEO tag structures to drastically improve content discoverability and search engine visibility.',
        checklist: [
            'Standardized primary & secondary category taxonomies',
            'Enriched pages with descriptive meta titles & meta descriptions',
            'Applied accessibility aria tags and alt image attributes',
            'Configured automated content archiving & retention flags'
        ],
        badge: 'Taxonomy & SEO Optimization'
    },
    {
        step: 3,
        title: '3. QA & Governance Validation',
        description: 'Performing multi-tier quality control checks against organizational guidelines, legal compliance, confidentiality rules, and accessibility standards.',
        checklist: [
            'Audit check against brand identity & typography guidelines',
            'Verification of legal disclaimer & confidentiality compliance',
            'Mobile responsiveness & cross-browser QA testing',
            'Reduced publishing errors by 18% through pre-flight checks'
        ],
        badge: 'Quality Control & Governance'
    },
    {
        step: 4,
        title: '4. Production Publishing & Analytics',
        description: 'Publishing approved digital content live via Adobe Experience Manager (AEM). Connecting page analytics to Power BI & Google Analytics for real-time tracking.',
        checklist: [
            'One-click release deployment via Adobe Experience Manager',
            'Real-time event tracking setup with Google Tag Manager',
            'Post-publish validation & broken link monitoring',
            'Power BI dashboard performance reporting for stakeholders'
        ],
        badge: 'AEM Release & Analytics'
    }
];

function initWorkflowSimulator() {
    const stepCards = document.querySelectorAll('.step-card');
    const stepTitle = document.getElementById('sim-step-title');
    const stepDesc = document.getElementById('sim-step-desc');
    const stepChecklist = document.getElementById('sim-step-checklist');
    const stepBadge = document.getElementById('sim-step-badge');

    stepCards.forEach(card => {
        card.addEventListener('click', () => {
            stepCards.forEach(c => c.classList.remove('active'));
            card.classList.add('active');

            const stepNum = parseInt(card.getAttribute('data-step'), 10);
            const data = workflowStepsData.find(s => s.step === stepNum);

            if (data) {
                stepTitle.textContent = data.title;
                stepDesc.textContent = data.description;
                stepBadge.textContent = data.badge;

                stepChecklist.innerHTML = data.checklist
                    .map(item => `<li><i class="ri-checkbox-circle-fill"></i> ${item}</li>`)
                    .join('');
            }
        });
    });
}

/* --------------------------------------------------------------------------
   Resume Modal Control & Print Action
   -------------------------------------------------------------------------- */
function initResumeModal() {
    const openBtn = document.getElementById('open-resume-btn');
    const openHeaderBtn = document.getElementById('open-resume-header-btn');
    const modal = document.getElementById('resume-modal');
    const closeBtn = document.getElementById('close-resume-btn');
    const printBtn = document.getElementById('print-resume-btn');

    const openModal = (e) => {
        if (e) e.preventDefault();
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    };

    const closeModal = () => {
        modal.classList.remove('active');
        document.body.style.overflow = 'auto';
    };

    if (openBtn) openBtn.addEventListener('click', openModal);
    if (openHeaderBtn) openHeaderBtn.addEventListener('click', openModal);
    if (closeBtn) closeBtn.addEventListener('click', closeModal);

    if (modal) {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) closeModal();
        });
    }

    if (printBtn) {
        printBtn.addEventListener('click', () => {
            window.print();
        });
    }
}

/* --------------------------------------------------------------------------
   Contact Form Submission Handler
   -------------------------------------------------------------------------- */
function initContactForm() {
    const form = document.getElementById('portfolio-contact-form');
    if (!form) return;

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const submitBtn = form.querySelector('button[type="submit"]');
        const originalText = submitBtn.innerHTML;

        submitBtn.disabled = true;
        submitBtn.innerHTML = '<i class="ri-loader-4-line ri-spin"></i> Sending message...';

        setTimeout(() => {
            submitBtn.disabled = false;
            submitBtn.innerHTML = originalText;
            form.reset();
            showToast('Message sent successfully! Ankita will get back to you shortly.');
        }, 1200);
    });
}

/* Toast Helper */
function showToast(message) {
    let container = document.querySelector('.toast-container');
    if (!container) {
        container = document.createElement('div');
        container.className = 'toast-container';
        document.body.appendChild(container);
    }

    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerHTML = `<i class="ri-checkbox-circle-fill" style="color: var(--accent-emerald); font-size: 1.2rem;"></i> <span>${message}</span>`;
    
    container.appendChild(toast);

    setTimeout(() => {
        toast.style.opacity = '0';
        toast.style.transform = 'translateY(10px)';
        setTimeout(() => toast.remove(), 300);
    }, 4000);
}

/* --------------------------------------------------------------------------
   Metrics Counter Animation
   -------------------------------------------------------------------------- */
function initMetricsCounter() {
    const counters = document.querySelectorAll('.metric-number');
    let animated = false;

    const animateCounters = () => {
        counters.forEach(counter => {
            const target = parseInt(counter.getAttribute('data-target'), 10);
            const prefix = counter.getAttribute('data-prefix') || '';
            const suffix = counter.getAttribute('data-suffix') || '';
            
            let count = 0;
            const increment = target / 40;

            const updateCount = () => {
                count += increment;
                if (count < target) {
                    counter.textContent = prefix + Math.ceil(count) + suffix;
                    requestAnimationFrame(updateCount);
                } else {
                    counter.textContent = prefix + target + suffix;
                }
            };

            updateCount();
        });
    };

    window.addEventListener('scroll', () => {
        const metricsSection = document.querySelector('.hero-metrics');
        if (!metricsSection || animated) return;

        const rect = metricsSection.getBoundingClientRect();
        if (rect.top <= window.innerHeight && rect.bottom >= 0) {
            animated = true;
            animateCounters();
        }
    });
    
    // Trigger on immediate view if hero visible
    setTimeout(() => {
        if (!animated) {
            animated = true;
            animateCounters();
        }
    }, 500);
}
