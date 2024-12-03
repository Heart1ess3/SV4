import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

function MorePage() {
    return (
      <ImageList sx={{ width: 700, height: 630 }} cols={4} rowHeight={164}>
        {itemData.map((item) => (
          <ImageListItem key={item.img}>
            <img
              srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format x,
                  ${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
              alt={item.title}
              loading="lazy"
            />
          </ImageListItem>
        ))}
      </ImageList>
    );
  }
  const itemData = [
    {
      img: "https://www.skiweekends.com/assets/uploads/image_library/vallee%20blanche.jpg",
      title: "La Vallee Blanche",
  },
  {
      img: "https://cdn-s-www.ledauphine.com/images/AD355F2F-E977-4315-A83E-70E833EE97E1/SCH_04/ce-samedi-matin-a-l-aube-il-devrait-y-avoir-du-travail-pour-degager-la-ligne-de-course-et-assurer-la-bonne-tenue-du-geant-sur-une-piste-unique-photo-le-dl-thierry-guillot.jpg",
      title: "Face Bellevarde",
  },
  {
      img: "https://static.seetheworld.com/image_uploader/photos/ed/original/adh-150410-sr-sarenne-down-jpg.jpg",
      title: "La Sarenne",
  },
  {
      img: "https://i.ytimg.com/vi/Hq_wxQiJxz0/maxresdefault.jpg",
      title: "Streif",
  },
  {
      img: "https://www.gazzettadellevalli.it/upload/2013/12/Madonna-Campiglio-2.jpg",
      title: "Canalone-Miramonti",
  },
  {
      img: "https://s3-images.sportnews.bz/_images/fit/1000x563/img/2023/12/die-piste-in-alta-badia-ist-schon-jetzt-in-weiss-gehuellt.jpg",
      title: "Gran Risa",
  },
    {
      img: 'https://blog-cdn.aviata.kz/blog/posts/optimized/0_677e7efb15dbda50dfe47c57fb911d159ce9d0cd.png.webp',
      title: 'Chamonix-Mont Blanc',
    },
    {
      img: 'https://blog-cdn.aviata.kz/blog/posts/optimized/0_bfab9aa631fe0260f2d4635f5cadbc3860b7c6d0.png.webp',
      title: 'Sundance Mountain Resort',
    },
    {
      img: 'https://blog-cdn.aviata.kz/blog/posts/optimized/0_3649148a200ea96135da4970931277f07bd3af2b.png.webp',
      title: 'Courchevel',
    },
    {
      img: 'https://blog-cdn.aviata.kz/blog/posts/optimized/0_27044c03303e85e0521dac6e0790f48ffee7010d.png.webp',
      title: 'Val Thorens',
    },
    {
      img: 'https://blog-cdn.aviata.kz/blog/posts/optimized/0_7bbb208a253123a0f2fd1dfbaaa1ddef9e6a6ea1.png.webp',
      title: 'Zermatt',
    },
    {
      img: 'https://blog-cdn.aviata.kz/blog/posts/optimized/0_3d13f0f2c67aecd853824bf8e4cac5f012aa6ee5.png.webp',
      title: 'Ischgl',
    },
    {
      img: 'https://blog-cdn.aviata.kz/blog/posts/optimized/0_7ff840b13e4d755c7f9b6c2dddf1643fe928db21.png.webp',
      title: 'St. Moritz',
    },
    {
      img: 'https://blog-cdn.aviata.kz/blog/posts/optimized/0_bea4dfc2fb21df0c4b687209712c4ae04d9b0d63.png.webp',
      title: 'Verbier',
    },
    {
      img: 'https://blog-cdn.aviata.kz/blog/posts/optimized/0_a62d5a26036fac1b19a19ea801733863172afd1d.png.webp',
      title: 'Kitzbuhel',
    },
    {
      img: 'https://blog-cdn.aviata.kz/blog/posts/optimized/0_50e5620e2b6b3bdfd5c324379cec131f500f3e28.png.webp',
      title: 'Crans-Montana',
    }
    
];


export default MorePage;
  