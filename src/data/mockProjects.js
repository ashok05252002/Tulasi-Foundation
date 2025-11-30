import { faker } from '@faker-js/faker';

// --- Curated list of high-quality, stable image URLs ---

const coverImages = [
  'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?q=80&w=1974&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=2070&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1605276374104-5de67d286944?q=80&w=2070&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1570129477492-45c003edd2be?q=80&w=2070&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1448630360428-65456885c650?q=80&w=2067&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1600585152225-358945c5846a?q=80&w=2070&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1480074568708-e7b720bb3f09?q=80&w=2070&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1598228723793-52759bba239c?q=80&w=1974&auto=format&fit=crop',
];

const sideImages = [
  'https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1973&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1628744448432-56b50046b6a3?q=80&w=2070&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1574362846839-8d80d10335f5?q=80&w=1964&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?q=80&w=2070&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1605146769289-440113cc3d00?q=80&w=2070&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?q=80&w=2070&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1558036117-15d82a90b9b1?q=80&w=2070&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1600566753190-17f0e278e15c?q=80&w=2070&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1572120360610-d971b9d7767c?q=80&w=2070&auto=format&fit=crop',
];

const galleryImagesPool = [
  'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=2000&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1616046229478-9901c5536a45?q=80&w=2000&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?q=80&w=2070&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1600585152225-358945c5846a?q=80&w=2070&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1617806118233-18e1de247200?q=80&w=1964&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1505691938895-1758d7feb511?q=80&w=2070&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?q=80&w=1964&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1615875605825-5eb9bb5fea22?q=80&w=1974&auto=format&fit=crop',
];

const floorPlanImagesPool = [
  'https://images.unsplash.com/photo-1604014237800-1c9102c219da?q=80&w=2070&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1560185007-c5ca9d2c014d?q=80&w=2070&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1600585153488-a8a7c8052994?q=80&w=2070&auto=format&fit=crop',
];

const surroundingFeatureImages = {
  schools: 'https://images.unsplash.com/photo-1592280771190-3e2e4d571952?q=80&w=2070&auto=format&fit=crop',
  colleges: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=2070&auto=format&fit=crop',
  hospitals: 'https://images.unsplash.com/photo-1586773860418-d37222d8fce3?q=80&w=2073&auto=format&fit=crop',
  companies: 'https://images.unsplash.com/photo-1531973576160-7125cd663d86?q=80&w=2070&auto=format&fit=crop',
};

// --- End of Image List ---

const generateProjects = (count) => {
  const projects = [];
  for (let i = 0; i < count; i++) {
    const projectName = faker.company.name().split(' ')[0] + ' City';
    projects.push({
      id: faker.string.uuid(),
      name: projectName,
      location: `${faker.location.city()}`,
      projectType: faker.helpers.arrayElement(['Gated Community', 'Integrated Township', 'Plotted Development', 'Apartments', 'Villas']),
      totalArea: `${faker.number.int({ min: 2, max: 10 })}.${faker.number.int({ min: 1, max: 9 })} Acre`,
      units: `${faker.number.int({ min: 50, max: 200 })} Units`,
      approval: faker.helpers.arrayElement(['DTCP & RERA', 'CMDA Approved', 'RERA Approved']),
      plotPrice: `Rs.${faker.number.int({ min: 1800, max: 3500 })}/-SqFt`,
      villaPrice: faker.helpers.arrayElement(['Coming Soon', `Starts from Rs.${faker.number.int({ min: 40, max: 90 })} Lakhs`]),
      loan: `${faker.number.int({ min: 75, max: 90 })}% Home Loan`,
      description: faker.lorem.paragraphs(4),
      shortDescription: faker.lorem.sentence({ min: 10, max: 15 }),
      coverImage: coverImages[i % coverImages.length],
      sideImage: sideImages[i % sideImages.length],
      priceRange: `$${faker.number.int({ min: 300, max: 900 })}k - $${faker.number.int({ min: 1, max: 5 })}.${faker.number.int({ min: 1, max: 9 })}M`,
      status: faker.helpers.arrayElement(['Completed', 'Under Construction', 'New Launch']),
      galleryImages: faker.helpers.arrayElements(galleryImagesPool, 6),
      floorPlanImages: faker.helpers.arrayElements(floorPlanImagesPool, 3),
      surroundingFeatures: {
        schools: {
          image: surroundingFeatureImages.schools,
          list: [
            'Montfront School(Cbse) - 1.1 Km',
            'Therasapuram School - 1 Km',
            'Little Flower Hr.Sec.Scl - 1 Km',
            'TKV School - 1.8 Km',
            'Vivekananda Vidhyalaya - 7.5 Km',
            'Velammal Vishyashram (Cbse) - 11 Km',
          ],
        },
        colleges: {
          image: surroundingFeatureImages.colleges,
          list: [
            'Sri Venkateshwara College Of Edu.',
            'Sri Krishna Engg College',
            'Dhaanish Ahmed College',
            'Rrase College Of Engg',
            'Sri Venkateshwara Col. Of Engg.',
            'Xavier Institute Of Management',
          ],
        },
        hospitals: {
          image: surroundingFeatureImages.hospitals,
          list: [
            'Sri Perumbudur ESI Hospital',
            'RMD Specialities Hospital',
          ],
        },
        companies: {
          image: surroundingFeatureImages.companies,
          list: [
            'Sri Global Moparts',
            'Jintech Automotive India Pvt Ltd',
            'Nettlefolds India Pvt Ltd',
            'Sipcot Industial Park',
            'Ashok Leyland',
            'Hyundai Motor India Limited',
          ],
        },
      },
    });
  }
  return projects;
};

export const mockProjects = generateProjects(9);
