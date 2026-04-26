import { PrismaClient } from '../generated/prisma';

const prisma = new PrismaClient();

// Función auxiliar para simular la optimización y rotar las imágenes proporcionadas
function optimizeUrlCloudy(url: string): string {
  if (url.includes('res.cloudinary.com')) {
    return url.replace('/upload/', '/upload/f_auto,q_auto/');
  }
  return url;
}

const cloudinaryImages = [
  'https://res.cloudinary.com/dmhadvchw/image/upload/v1775273492/Artboard_1.jpg_wccoph.jpg',
  'https://res.cloudinary.com/dmhadvchw/image/upload/v1775273493/Artboard_2.jpg_wt6ieb.jpg',
  'https://res.cloudinary.com/dmhadvchw/image/upload/v1775273493/Artboard_3.jpg_tmeilp.jpg'
];

const getRandomImage = () => optimizeUrlCloudy(cloudinaryImages[Math.floor(Math.random() * cloudinaryImages.length)]);

async function main() {
  console.log('Iniciando seed de blogs...');

  // Crear Tags primero
  const tags = await prisma.tags.createMany({
    data: [
      { name: 'Diseño', color: '#FF6B6B', BgColor: '#FFE5E5' },
      { name: 'Iluminación', color: '#4ECDC4', BgColor: '#E5F9F7' },
      { name: 'Tendencias', color: '#FFE66D', BgColor: '#FFF8E5' },
      { name: 'Consejos', color: '#95E1D3', BgColor: '#E5F9F5' },
      { name: 'Productos', color: '#AA96DA', BgColor: '#F0E5F9' },
    ],
    skipDuplicates: true,
  });

  // Obtener los tags creados
  const allTags = await prisma.tags.findMany();
  const tagMap = {
    design: allTags.find(t => t.name === 'Diseño'),
    lighting: allTags.find(t => t.name === 'Iluminación'),
    trends: allTags.find(t => t.name === 'Tendencias'),
    tips: allTags.find(t => t.name === 'Consejos'),
    products: allTags.find(t => t.name === 'Productos'),
  };

  // Crear Blog 1
  const blog1 = await prisma.blog.create({
    data: {
      title: 'Cómo elegir la iluminación perfecta para tu hogar',
      introduction: 'Descubre las claves para iluminar cada espacio de tu hogar de manera inteligente y crear ambientes acogedores que reflejen tu personalidad',
      images: {
        create: [
          {
            link: getRandomImage(),
            position: 0,
            alt: 'Iluminación moderna en sala de estar',
          },
          {
            link: getRandomImage(),
            position: 2,
            alt: 'Iluminación moderna en sala de estar',
          }
        ],
      },
      blogContent: {
        create: [
          {
            text: '<div class="ql-editor"><h2>Tipos de iluminación</h2><p>La iluminación es un elemento fundamental en el diseño de interiores. Existen tres tipos principales:</p><ul><li>Iluminación ambiente</li><li>Iluminación de acento</li><li>Iluminación de tarea</li></ul></div>',
            position: 0,
          },
          {
            text: '<div class="ql-editor"><blockquote>"La luz correcta puede transformar completamente un espacio y mejorar el bienestar de los que lo habitan."</blockquote></div>',
            position: 1,
          },
          {
            text: '<div class="ql-editor"><h3>Consejos prácticos</h3><p>Al elegir la iluminación considera:</p><ul><li>La función del espacio</li><li>El color de las paredes</li><li>El tamaño de la habitación</li><li>La eficiencia energética</li></ul><p>Una buena combinación de estos elementos creará el ambiente perfecto.</p></div>',
            position: 3,
          },
        ],
      },
      BlogTags: {
        create: [
          { tagId: tagMap.lighting?.id || '' },
          { tagId: tagMap.tips?.id || '' },
        ],
      },
    },
  });

  // Crear Blog 2
  const blog2 = await prisma.blog.create({
    data: {
      title: 'Tendencias en iluminación para 2026',
      introduction: 'Explora las tendencias más innovadoras en diseño de iluminación que dominarán este año. Desde tecnología LED inteligente hasta diseños minimalistas y sostenibles',
      images: {
        create: [
          {
            link: getRandomImage(),
            position: 0,
            alt: 'Lámparas LED modernas',
          },
        ],
      },
      blogContent: {
        create: [
          {
            text: '<div class="ql-editor"><h2>Sostenibilidad en primer plano</h2><p>Este año, la sostenibilidad es protagonista. Los diseñadores apuestan por materiales ecológicos y tecnología eficiente en energía.</p></div>',
            position: 0,
          },
          {
            text: '<div class="ql-editor"><blockquote>"La iluminación del futuro es inteligente, ecológica y adaptable a nuestras necesidades."</blockquote></div>',
            position: 1,
          },
          {
            text: '<div class="ql-editor"><h3>Colores cálidos y naturales</h3><p>La tendencia va hacia tonos cálidos que crean espacios más acogedores. Las luces naturales integradas con tecnología LED son cada vez más populares.</p><p>Otro aspecto relevante es la automatización, permitiendo controlar la iluminación desde el móvil o mediante comandos de voz.</p></div>',
            position: 2,
          },
        ],
      },
      BlogTags: {
        create: [
          { tagId: tagMap.trends?.id || '' },
          { tagId: tagMap.lighting?.id || '' },
        ],
      },
    },
  });

  // Crear Blog 3
  const blog3 = await prisma.blog.create({
    data: {
      title: 'Lámparas de diseño que transforman espacios',
      introduction: 'Conoce las mejores lámparas de diseño que no solo iluminan, sino que se convierten en piezas de arte que elevañ la estética de cualquier ambiente.',
      images: {
        create: [
          {
            link: getRandomImage(),
            position: 0,
            alt: 'Lámpara de diseño colgante',
          },
        ],
      },
      blogContent: {
        create: [
          {
            text: '<div class="ql-editor"><h2>El arte de iluminar</h2><p>Las lámparas de diseño son más que simples fuentes de luz. Son elementos decorativos que expresan personalidad y estilo.</p></div>',
            position: 0,
          },
          {
            text: '<div class="ql-editor"><blockquote>"Cada lámpara cuenta una historia y añade carácter a tu hogar."</blockquote></div>',
            position: 1,
          },
          {
            text: '<div class="ql-editor"><h3>Materiales y acabados</h3><p>Desde vidrio soplado hasta metal reciclado, los diseñadores trabajan con materiales variados para crear piezas únicas.</p><ul><li><strong>Vidrio soplado:</strong> Transparencia y elegancia</li><li><strong>Cerámica:</strong> Calidez y textura</li><li><strong>Acero inoxidable:</strong> Modernidad y durabilidad</li><li><strong>Madera natural:</strong> Calidez y sostenibilidad</li></ul></div>',
            position: 2,
          },
        ],
      },
      BlogTags: {
        create: [
          { tagId: tagMap.design?.id || '' },
          { tagId: tagMap.products?.id || '' },
        ],
      },
    },
  });

  // Crear Blog 4
  const blog4 = await prisma.blog.create({
    data: {
      title: 'Guía completa de iluminación para diferentes espacios',
      introduction: 'Cada espacio tiene necesidades de iluminación únicas. Aprende a adaptar la luz a cada ambiente para maximizar funcionalidad y confort.',
      images: {
        create: [
          {
            link: getRandomImage(),
            position: 0,
            alt: 'Iluminación en cocina moderna',
          },
        ],
      },
      blogContent: {
        create: [
          {
            text: '<div class="ql-editor"><h2>Sala de estar</h2><p>La sala de estar requiere una iluminación versátil que combine comodidad visual con ambiente acogedor. Usa varias capas de luz.</p></div>',
            position: 0,
          },
          {
            text: '<div class="ql-editor"><blockquote>"Cada rincón merece la iluminación adecuada para brillar."</blockquote></div>',
            position: 1,
          },
          {
            text: '<div class="ql-editor"><h3>Dormitorio</h3><p>En el dormitorio, la iluminación debe ser suave y controlable. Considera:</p><ul><li>Lámparas de mesita baja</li><li>Apliques con atenuador</li><li>Iluminación ambiental suave</li></ul><h3>Cocina</h3><p>Necesita iluminación brillante y funcional. Incluye luz bajo los armarios y sobre las superficies de trabajo.</p></div>',
            position: 2,
          },
        ],
      },
      BlogTags: {
        create: [
          { tagId: tagMap.tips?.id || '' },
          { tagId: tagMap.design?.id || '' },
        ],
      },
    },
  });

  // Crear Blog 5
  const blog5 = await prisma.blog.create({
    data: {
      title: 'Innovación en tecnología LED',
      introduction: 'La tecnología LED ha revolucionado la iluminación. Descubre cómo funciona y por qué es la opción más inteligente para tu hogar.',
      images: {
        create: [
          {
            link: getRandomImage(),
            position: 0,
            alt: 'Tecnología LED moderna',
          },
        ],
      },
      blogContent: {
        create: [
          {
            text: '<div class="ql-editor"><h2>¿Por qué LED?</h2><p>Los LED son más eficientes, duraderos y ecológicos que la iluminación tradicional. Consumen un 80% menos energía que las bombillas incandescentes.</p></div>',
            position: 0,
          },
          {
            text: '<div class="ql-editor"><blockquote>"La iluminación LED no es solo una tendencia, es el presente y el futuro de la energía sostenible."</blockquote></div>',
            position: 1,
          },
          {
            text: '<div class="ql-editor"><h3>Ventajas principales</h3><p>Entre las ventajas destacadas:</p><ul><li>Mayor durabilidad (hasta 50,000 horas)</li><li>Menor consumo de energía</li><li>Menos calor generado</li><li>Disponibilidad de diferentes tonos de luz</li><li>Iluminación instantánea</li></ul><p>La inversión inicial es mayor, pero el ahorro en electricidad compensa rápidamente.</p></div>',
            position: 2,
          },
        ],
      },
      BlogTags: {
        create: [
          { tagId: tagMap.trends?.id || '' },
          { tagId: tagMap.products?.id || '' },
        ],
      },
    },
  });

  console.log('✅ Seed completado con éxito');
  console.log(`📝 Se crearon 5 blogs de prueba`);
  console.log(`🏷️  Se crearon 5 tags`);
}

main()
  .catch((e) => {
    console.error('❌ Error durante el seed:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });