export const brands = [
  {
    id: 1,
    name: 'Apple',
    logo: '/IMG/Brand_1.jpg',
    products: [
      {
        id: 1,
        name: 'MacBook Air M1',
        image: '/IMG/Apple_Product/AP1.jpg',
        angleImages: ['/IMG/Apple_Product/AP1.jpg', '/IMG/Apple_Product/AP1.1.jpg'],
        price: '$999',
        description: 'The MacBook Air with M1 chip delivers incredible performance and up to 18 hours of battery life.',
        specs: {
          processor: 'Apple M1 chip',
          memory: '8GB unified memory',
          storage: '256GB SSD',
          display: '13.3-inch Retina display',
          weight: '2.8 pounds'
        }
      },
      {
        id: 2,
        name: 'MacBook Pro 14 M4',
        image: '/IMG/Apple_Product/AP2.jpg',
        angleImages: ['/IMG/Apple_Product/AP2.jpg', '/IMG/Apple_Product/AP2.1.jpg', '/IMG/Apple_Product/AP2.2.jpg', '/IMG/Apple_Product/AP2.3.jpg'],
        price: '$1999',
        description: 'The MacBook Pro 14-inch with M4 chip offers powerful performance for professionals.',
        specs: {
          processor: 'Apple M4 chip',
          memory: '16GB unified memory',
          storage: '512GB SSD',
          display: '14.2-inch Liquid Retina XDR display',
          weight: '3.4 pounds'
        }
      },
      {
        id: 3,
        name: 'MacBook Pro 14 M4 Pro',
        image: '/IMG/Apple_Product/AP3.jpg',
        angleImages: ['/IMG/Apple_Product/AP3.jpg', '/IMG/Apple_Product/AP3.1.jpg'],
        price: '$2499',
        description: 'Designed for pro users, this MacBook Pro features advanced capabilities.',
        specs: {
          processor: 'Apple M4 Pro chip',
          memory: '32GB unified memory',
          storage: '1TB SSD',
          display: '14.2-inch Liquid Retina XDR display',
          weight: '3.4 pounds'
        }
      },
      {
        id: 4,
        name: 'MacBook Pro 14 M4 Max',
        image: '/IMG/Apple_Product/AP4.jpg',
        angleImages: ['/IMG/Apple_Product/AP4.jpg', '/IMG/Apple_Product/AP4.1.jpg'],
        price: '$3499',
        description: 'The ultimate MacBook Pro with M4 Max chip for intensive workloads.',
        specs: {
          processor: 'Apple M4 Max chip',
          memory: '64GB unified memory',
          storage: '2TB SSD',
          display: '14.2-inch Liquid Retina XDR display',
          weight: '3.4 pounds'
        }
      },
      {
        id: 5,
        name: 'MacBook Pro 16 M4 Max',
        image: '/IMG/Apple_Product/AP5.jpg',
        angleImages: ['/IMG/Apple_Product/AP5.jpg', '/IMG/Apple_Product/AP5.1.jpg'],
        price: '$3999',
        description: 'Larger screen and powerful M4 Max for creative professionals.',
        specs: {
          processor: 'Apple M4 Max chip',
          memory: '64GB unified memory',
          storage: '2TB SSD',
          display: '16.2-inch Liquid Retina XDR display',
          weight: '4.7 pounds'
        }
      }
    ]
  },
  {
    id: 2,
    name: 'DELL',
    logo: '/IMG/Brand_5.jpg',
    products: [
      {
        id: 6,
        name: 'Dell XPS 17',
        image: '/IMG/Dell_Product/D1.jpg',
        angleImages: ['/IMG/Dell_Product/D1.jpg', '/IMG/Dell_Product/D1.1.jpg', '/IMG/Dell_Product/D1.2.jpg', '/IMG/Dell_Product/D1.3.jpg'],
        price: '$1799',
        description: 'Powerful Dell XPS 17 with high-resolution display for productivity.',
        specs: {
          processor: 'Intel Core i7',
          memory: '16GB RAM',
          storage: '512GB SSD',
          display: '17-inch 4K UHD display',
          weight: '4.5 pounds'
        }
      },
      {
        id: 7,
        name: 'Dell Inspiron 15',
        image: '/IMG/Dell_Product/D2.jpg',
        angleImages: ['/IMG/Dell_Product/D2.jpg', '/IMG/Dell_Product/D2.1.jpg', '/IMG/Dell_Product/D2.2.jpg', '/IMG/Dell_Product/D2.3.jpg'],
        price: '$699',
        description: 'Affordable Dell Inspiron 15 for everyday use.',
        specs: {
          processor: 'Intel Core i5',
          memory: '8GB RAM',
          storage: '256GB SSD',
          display: '15.6-inch Full HD display',
          weight: '4.8 pounds'
        }
      },
      {
        id: 8,
        name: 'Dell Latitude 14',
        image: '/IMG/Dell_Product/D3.jpg',
        angleImages: ['/IMG/Dell_Product/D3.jpg', '/IMG/Dell_Product/D3.1.jpg', '/IMG/Dell_Product/D3.2.jpg'],
        price: '$899',
        description: 'Business-oriented Dell Latitude 14 with security features.',
        specs: {
          processor: 'Intel Core i5',
          memory: '16GB RAM',
          storage: '512GB SSD',
          display: '14-inch Full HD display',
          weight: '3.2 pounds'
        }
      },
      {
        id: 9,
        name: 'Dell G5 15',
        image: '/IMG/Dell_Product/D4.jpg',
        angleImages: ['/IMG/Dell_Product/D4.jpg', '/IMG/Dell_Product/D4.1.jpg', '/IMG/Dell_Product/D4.2.jpg', '/IMG/Dell_Product/D4.3.jpg'],
        price: '$1099',
        description: 'Gaming laptop Dell G5 15 with dedicated graphics.',
        specs: {
          processor: 'Intel Core i7',
          memory: '16GB RAM',
          storage: '512GB SSD',
          display: '15.6-inch Full HD display',
          weight: '5.5 pounds'
        }
      },
      {
        id: 10,
        name: 'Dell Alienware m15',
        image: '/IMG/Dell_Product/D5.jpg',
        angleImages: ['/IMG/Dell_Product/D5.jpg', '/IMG/Dell_Product/D5.1.jpg', '/IMG/Dell_Product/D5.2.jpg'],
        price: '$1999',
        description: 'High-performance gaming laptop with RGB lighting.',
        specs: {
          processor: 'Intel Core i9',
          memory: '32GB RAM',
          storage: '1TB SSD',
          display: '15.6-inch 4K OLED display',
          weight: '5.2 pounds'
        }
      },
      {
        id: 11,
        name: 'Dell Precision 5550',
        image: '/IMG/Dell_Product/D6.jpg',
        angleImages: ['/IMG/Dell_Product/D6.jpg', '/IMG/Dell_Product/D6.1.jpg', '/IMG/Dell_Product/D6.2.jpg', '/IMG/Dell_Product/D6.3.jpg'],
        price: '$2499',
        description: 'Mobile workstation for professionals in design and engineering.',
        specs: {
          processor: 'Intel Xeon',
          memory: '32GB RAM',
          storage: '1TB SSD',
          display: '15.6-inch 4K display',
          weight: '4.1 pounds'
        }
      }
    ]
  },
  {
    id: 3,
    name: 'Lenovo',
    logo: '/IMG/Brand_4.jpg',
    products: [
      {
        id: 12,
        name: 'Lenovo ThinkPad X1 Carbon',
        image: '/IMG/Lenovo_Product/LN1.jpg',
        angleImages: ['/IMG/Lenovo_Product/LN1.jpg', '/IMG/Lenovo_Product/LN1.1.jpg', '/IMG/Lenovo_Product/LN1.2.jpg'],
        price: '$1499',
        description: 'Premium business ultrabook with legendary keyboard.',
        specs: {
          processor: 'Intel Core i7',
          memory: '16GB RAM',
          storage: '512GB SSD',
          display: '14-inch 4K display',
          weight: '2.5 pounds'
        }
      },
      {
        id: 13,
        name: 'Lenovo Yoga 9i',
        image: '/IMG/Lenovo_Product/LN2.jpg',
        angleImages: ['/IMG/Lenovo_Product/LN2.jpg', '/IMG/Lenovo_Product/LN2.1.jpg', '/IMG/Lenovo_Product/LN2.2.jpg', '/IMG/Lenovo_Product/LN2.3.jpg'],
        price: '$1299',
        description: '2-in-1 laptop with 360-degree hinge and stylus support.',
        specs: {
          processor: 'Intel Core i7',
          memory: '16GB RAM',
          storage: '512GB SSD',
          display: '14-inch 4K touchscreen',
          weight: '3.1 pounds'
        }
      },
      {
        id: 14,
        name: 'Lenovo Legion 5',
        image: '/IMG/Lenovo_Product/LN3.jpg',
        angleImages: ['/IMG/Lenovo_Product/LN3.jpg', '/IMG/Lenovo_Product/LN3.1.jpg', '/IMG/Lenovo_Product/LN3.2.jpg', '/IMG/Lenovo_Product/LN3.3.jpg'],
        price: '$1099',
        description: 'Gaming laptop with AMD Ryzen and NVIDIA graphics.',
        specs: {
          processor: 'AMD Ryzen 7',
          memory: '16GB RAM',
          storage: '512GB SSD',
          display: '15.6-inch 120Hz Full HD display',
          weight: '5.5 pounds'
        }
      },
      {
        id: 15,
        name: 'Lenovo IdeaPad 3',
        image: '/IMG/Lenovo_Product/LN4.jpg',
        angleImages: ['/IMG/Lenovo_Product/LN4.jpg', '/IMG/Lenovo_Product/LN4.1.jpg', '/IMG/Lenovo_Product/LN4.2.jpg', '/IMG/Lenovo_Product/LN4.3.jpg'],
        price: '$499',
        description: 'Budget-friendly laptop for everyday tasks.',
        specs: {
          processor: 'Intel Core i3',
          memory: '8GB RAM',
          storage: '256GB SSD',
          display: '15.6-inch Full HD display',
          weight: '4.1 pounds'
        }
      },
      {
        id: 16,
        name: 'Lenovo ThinkBook 14s',
        image: '/IMG/Lenovo_Product/LN5.jpg',
        angleImages: ['/IMG/Lenovo_Product/LN5.jpg', '/IMG/Lenovo_Product/LN5.1.jpg', '/IMG/Lenovo_Product/LN5.2.jpg', '/IMG/Lenovo_Product/LN5.3.jpg'],
        price: '$799',
        description: 'Business laptop with modern design and performance.',
        specs: {
          processor: 'Intel Core i5',
          memory: '8GB RAM',
          storage: '512GB SSD',
          display: '14-inch Full HD display',
          weight: '3.2 pounds'
        }
      },
      {
        id: 17,
        name: 'Lenovo Yoga Slim 7',
        image: '/IMG/Lenovo_Product/LN6.jpg',
        angleImages: ['/IMG/Lenovo_Product/LN6.jpg', '/IMG/Lenovo_Product/LN6.1.jpg', '/IMG/Lenovo_Product/LN6.2.jpg', '/IMG/Lenovo_Product/LN6.3.jpg'],
        price: '$999',
        description: 'Slim laptop with AMD Ryzen and long battery life.',
        specs: {
          processor: 'AMD Ryzen 5',
          memory: '16GB RAM',
          storage: '512GB SSD',
          display: '14-inch Full HD display',
          weight: '2.9 pounds'
        }
      }
    ]
  },
  {
    id: 4,
    name: 'ACER',
    logo: '/IMG/Brand_2.jpg',
    products: [
      {
        id: 18,
        name: 'Acer Aspire 5',
        image: '/IMG/Acer_Product/AC1.jpg',
        angleImages: ['/IMG/Acer_Product/AC1.jpg', '/IMG/Acer_Product/AC1.1.jpg', '/IMG/Acer_Product/AC1.2.jpg', '/IMG/Acer_Product/AC1.3.jpg'],
        price: '$599',
        description: 'Versatile laptop for everyday computing tasks.',
        specs: {
          processor: 'Intel Core i5',
          memory: '8GB RAM',
          storage: '512GB SSD',
          display: '15.6-inch Full HD display',
          weight: '4.4 pounds'
        }
      },
      {
        id: 19,
        name: 'Acer Nitro 5',
        image: '/IMG/Acer_Product/AC2.jpg',
        angleImages: ['/IMG/Acer_Product/AC2.jpg', '/IMG/Acer_Product/AC2.1.jpg', '/IMG/Acer_Product/AC2.2.jpg', '/IMG/Acer_Product/AC2.3.jpg'],
        price: '$899',
        description: 'Gaming laptop with dedicated graphics card.',
        specs: {
          processor: 'Intel Core i7',
          memory: '16GB RAM',
          storage: '512GB SSD',
          display: '15.6-inch 120Hz Full HD display',
          weight: '5.7 pounds'
        }
      },
      {
        id: 20,
        name: 'Acer Swift 3',
        image: '/IMG/Acer_Product/AC3.jpg',
        angleImages: ['/IMG/Acer_Product/AC3.jpg', '/IMG/Acer_Product/AC3.1.jpg', '/IMG/Acer_Product/AC3.2.jpg', '/IMG/Acer_Product/AC3.3.jpg'],
        price: '$699',
        description: 'Slim and lightweight laptop for portability.',
        specs: {
          processor: 'AMD Ryzen 5',
          memory: '8GB RAM',
          storage: '256GB SSD',
          display: '14-inch Full HD display',
          weight: '2.9 pounds'
        }
      },
      {
        id: 21,
        name: 'Acer Predator Helios 300',
        image: '/IMG/Acer_Product/AC4.jpg',
        angleImages: ['/IMG/Acer_Product/AC4.jpg', '/IMG/Acer_Product/AC4.1.jpg', '/IMG/Acer_Product/AC4.2.jpg'],
        price: '$1299',
        description: 'High-performance gaming laptop with RGB keyboard.',
        specs: {
          processor: 'Intel Core i7',
          memory: '16GB RAM',
          storage: '1TB SSD',
          display: '15.6-inch 165Hz Full HD display',
          weight: '5.5 pounds'
        }
      },
      {
        id: 22,
        name: 'Acer Chromebook 514',
        image: '/IMG/Acer_Product/AC5.jpg',
        angleImages: ['/IMG/Acer_Product/AC5.jpg', '/IMG/Acer_Product/AC5.1.jpg', '/IMG/Acer_Product/AC5.2.jpg'],
        price: '$399',
        description: 'Chrome OS laptop for simple tasks and web browsing.',
        specs: {
          processor: 'Intel Celeron',
          memory: '8GB RAM',
          storage: '128GB SSD',
          display: '14-inch Full HD display',
          weight: '3.2 pounds'
        }
      },
      {
        id: 23,
        name: 'Acer TravelMate P2',
        image: '/IMG/Acer_Product/AC6.jpg',
        angleImages: ['/IMG/Acer_Product/AC6.jpg', '/IMG/Acer_Product/AC6.1.jpg', '/IMG/Acer_Product/AC6.2.jpg', '/IMG/Acer_Product/AC6.3.jpg'],
        price: '$799',
        description: 'Business laptop with long battery life.',
        specs: {
          processor: 'Intel Core i5',
          memory: '8GB RAM',
          storage: '256GB SSD',
          display: '14-inch Full HD display',
          weight: '3.5 pounds'
        }
      }
    ]
  },
  {
    id: 5,
    name: 'Asus',
    logo: '/IMG/Brand_7.jpg',
    products: [
      {
        id: 24,
        name: 'Asus ROG Strix G15',
        image: '/IMG/Asus_Product/AS1.jpg',
        angleImages: ['/IMG/Asus_Product/AS1.jpg', '/IMG/Asus_Product/AS1.1.jpg', '/IMG/Asus_Product/AS1.2.jpg', '/IMG/Asus_Product/AS1.3.jpg'],
        price: '$1299',
        description: 'Gaming laptop with AMD Ryzen processor and NVIDIA graphics.',
        specs: {
          processor: 'AMD Ryzen 7',
          memory: '16GB RAM',
          storage: '512GB SSD',
          display: '15.6-inch 144Hz Full HD display',
          weight: '5.1 pounds'
        }
      },
      {
        id: 25,
        name: 'Asus ZenBook 14',
        image: '/IMG/Asus_Product/AS2.jpg',
        angleImages: ['/IMG/Asus_Product/AS2.jpg', '/IMG/Asus_Product/AS2.1.jpg', '/IMG/Asus_Product/AS2.2.jpg'],
        price: '$899',
        description: 'Ultrabook with sleek design and long battery life.',
        specs: {
          processor: 'Intel Core i5',
          memory: '8GB RAM',
          storage: '512GB SSD',
          display: '14-inch Full HD display',
          weight: '2.6 pounds'
        }
      },
      {
        id: 26,
        name: 'Asus VivoBook 15',
        image: '/IMG/Asus_Product/AS3.jpg',
        angleImages: ['/IMG/Asus_Product/AS3.jpg', '/IMG/Asus_Product/As3.1.jpg', '/IMG/Asus_Product/AS3.2.jpg', '/IMG/Asus_Product/AS3.3.jpg'],
        price: '$599',
        description: 'Affordable laptop for students and everyday use.',
        specs: {
          processor: 'Intel Core i3',
          memory: '8GB RAM',
          storage: '256GB SSD',
          display: '15.6-inch Full HD display',
          weight: '3.7 pounds'
        }
      },
      {
        id: 27,
        name: 'Asus TUF Gaming F15',
        image: '/IMG/Asus_Product/As4.jpg',
        angleImages: ['/IMG/Asus_Product/As4.jpg', '/IMG/Asus_Product/AS4.1.jpg', '/IMG/Asus_Product/AS4.2.jpg', '/IMG/Asus_Product/AS4.3.jpg'],
        price: '$1099',
        description: 'Durable gaming laptop with military-grade build.',
        specs: {
          processor: 'Intel Core i7',
          memory: '16GB RAM',
          storage: '512GB SSD',
          display: '15.6-inch 144Hz Full HD display',
          weight: '5.3 pounds'
        }
      },
      {
        id: 28,
        name: 'Asus ROG Zephyrus G14',
        image: '/IMG/Asus_Product/AS5.jpg',
        angleImages: ['/IMG/Asus_Product/AS5.jpg', '/IMG/Asus_Product/AS5.1.jpg', '/IMG/Asus_Product/AS5.2.jpg', '/IMG/Asus_Product/AS5.3.jpg'],
        price: '$1499',
        description: 'Compact gaming laptop with powerful internals.',
        specs: {
          processor: 'AMD Ryzen 9',
          memory: '32GB RAM',
          storage: '1TB SSD',
          display: '14-inch 120Hz Full HD display',
          weight: '3.6 pounds'
        }
      },
      {
        id: 29,
        name: 'Asus ExpertBook B9450',
        image: '/IMG/Asus_Product/AS6.jpg',
        angleImages: ['/IMG/Asus_Product/AS6.jpg', '/IMG/Asus_Product/AS6.1.jpg', '/IMG/Asus_Product/AS6.2.jpg'],
        price: '$1599',
        description: 'Business laptop with premium features and security.',
        specs: {
          processor: 'Intel Core i7',
          memory: '16GB RAM',
          storage: '512GB SSD',
          display: '14-inch 4K display',
          weight: '2.2 pounds'
        }
      }
    ]
  },
  {
    id: 6,
    name: 'MSI',
    logo: '/IMG/Brand_3.jpg',
    products: [
      {
        id: 30,
        name: 'MSI Katana 17',
        image: '/IMG/MSI_Product/M1.jpg',
        angleImages: ['/IMG/MSI_Product/M1.jpg', '/IMG/MSI_Product/M1.1.jpg', '/IMG/MSI_Product/M1.2.jpg', '/IMG/MSI_Product/M1.3.jpg'],
        price: '$1299',
        description: 'Gaming laptop with powerful graphics and cooling.',
        specs: {
          processor: 'Intel Core i7',
          memory: '16GB RAM',
          storage: '512GB SSD',
          display: '17.3-inch Full HD display',
          weight: '6.6 pounds'
        }
      },
      {
        id: 31,
        name: 'MSI Cyborg 15',
        image: '/IMG/MSI_Product/M2.jpg',
        angleImages: ['/IMG/MSI_Product/M2.jpg', '/IMG/MSI_Product/M2.1.jpg', '/IMG/MSI_Product/M2.2.jpg'],
        price: '$1099',
        description: 'Versatile laptop for gaming and productivity.',
        specs: {
          processor: 'Intel Core i5',
          memory: '16GB RAM',
          storage: '512GB SSD',
          display: '15.6-inch Full HD display',
          weight: '4.6 pounds'
        }
      },
      {
        id: 32,
        name: 'MSI Cyborg 14',
        image: '/IMG/MSI_Product/M3.jpg',
        angleImages: ['/IMG/MSI_Product/M3.jpg', '/IMG/MSI_Product/M3.1.jpg', '/IMG/MSI_Product/M3.2.jpg'],
        price: '$999',
        description: 'Compact gaming laptop with high performance.',
        specs: {
          processor: 'Intel Core i7',
          memory: '16GB RAM',
          storage: '512GB SSD',
          display: '14-inch Full HD display',
          weight: '3.9 pounds'
        }
      },
      {
        id: 33,
        name: 'MSI Thin 15',
        image: '/IMG/MSI_Product/M4.jpg',
        angleImages: ['/IMG/MSI_Product/M4.jpg', '/IMG/MSI_Product/M4.1.jpg', '/IMG/MSI_Product/M4.2.jpg', '/IMG/MSI_Product/M4.3.jpg'],
        price: '$899',
        description: 'Thin and light laptop for everyday use.',
        specs: {
          processor: 'Intel Core i5',
          memory: '8GB RAM',
          storage: '512GB SSD',
          display: '15.6-inch Full HD display',
          weight: '3.8 pounds'
        }
      },
      {
        id: 34,
        name: 'MSI Creator Z16',
        image: '/IMG/MSI_Product/M5.jpg',
        angleImages: ['/IMG/MSI_Product/M5.jpg', '/IMG/MSI_Product/M5.1.jpg', '/IMG/MSI_Product/M5.2.jpg'],
        price: '$1999',
        description: 'Creator laptop with high-resolution display.',
        specs: {
          processor: 'Intel Core i7',
          memory: '32GB RAM',
          storage: '1TB SSD',
          display: '16-inch 4K display',
          weight: '4.2 pounds'
        }
      },
      {
        id: 35,
        name: 'MSI Prestige 14',
        image: '/IMG/MSI_Product/M5.jpg',
        angleImages: ['/IMG/MSI_Product/M5.jpg', '/IMG/MSI_Product/M5.1.jpg', '/IMG/MSI_Product/M5.2.jpg'],
        price: '$1199',
        description: 'Premium ultrabook for professionals.',
        specs: {
          processor: 'Intel Core i7',
          memory: '16GB RAM',
          storage: '512GB SSD',
          display: '14-inch 4K display',
          weight: '2.9 pounds'
        }
      }
    ]
  },
  {
    id: 7,
    name: 'Alienware',
    logo: '/IMG/Brand_6.jpg',
    products: [
      {
        id: 36,
        name: 'Alienware m15 R7',
        image: '/IMG/Alien_Ware_Product/AL1.jpg',
        angleImages: ['/IMG/Alien_Ware_Product/AL1.jpg', '/IMG/Alien_Ware_Product/AL1.1.jpg', '/IMG/Alien_Ware_Product/AL1.2.jpg', '/IMG/Alien_Ware_Product/AL1.3.jpg'],
        price: '$1999',
        description: 'High-performance gaming laptop with RGB lighting and powerful graphics.',
        specs: {
          processor: 'Intel Core i7',
          memory: '16GB RAM',
          storage: '512GB SSD',
          display: '15.6-inch 4K OLED display',
          weight: '5.2 pounds'
        }
      },
      {
        id: 37,
        name: 'Alienware x14',
        image: '/IMG/Alien_Ware_Product/AL2.jpg',
        angleImages: ['/IMG/Alien_Ware_Product/AL2.jpg', '/IMG/Alien_Ware_Product/AL2.1.jpg', '/IMG/Alien_Ware_Product/AL2.2.jpg'],
        price: '$1499',
        description: 'Compact gaming laptop with advanced cooling and portability.',
        specs: {
          processor: 'Intel Core i5',
          memory: '16GB RAM',
          storage: '512GB SSD',
          display: '14-inch Full HD display',
          weight: '4.1 pounds'
        }
      },
      {
        id: 38,
        name: 'Alienware m17 R5',
        image: '/IMG/Alien_Ware_Product/AL3.jpg',
        angleImages: ['/IMG/Alien_Ware_Product/AL3.jpg', '/IMG/Alien_Ware_Product/AL3.1.jpg', '/IMG/Alien_Ware_Product/AL3.2.jpg', '/IMG/Alien_Ware_Product/AL3.3.jpg'],
        price: '$2299',
        description: 'Large-screen gaming laptop with immersive display and high-end specs.',
        specs: {
          processor: 'Intel Core i9',
          memory: '32GB RAM',
          storage: '1TB SSD',
          display: '17.3-inch 4K UHD display',
          weight: '6.8 pounds'
        }
      },
      {
        id: 39,
        name: 'Alienware Area-51m',
        image: '/IMG/Alien_Ware_Product/AL4.jpg',
        angleImages: ['/IMG/Alien_Ware_Product/AL4.jpg', '/IMG/Alien_Ware_Product/AL4.1.jpg', '/IMG/Alien_Ware_Product/AL4.2.jpg', '/IMG/Alien_Ware_Product/AL4.3.jpg'],
        price: '$2999',
        description: 'Desktop replacement laptop with top-tier performance for gaming and content creation.',
        specs: {
          processor: 'Intel Core i9',
          memory: '64GB RAM',
          storage: '2TB SSD',
          display: '17.3-inch 4K display',
          weight: '7.5 pounds'
        }
      }
    ]
  },

]
