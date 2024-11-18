import React, { useState } from 'react';

function TabSection() {
  // State to manage the active tab
  const [activeTab, setActiveTab] = useState('Strategic Web Planning');

  // Content data for each tab
  const tabContent = {
    'Strategic Web Planning': {
      title: 'Strategic Web Planning',
      description:
        'Strategic web planning encompasses the meticulous planning and execution of strategies to achieve goals on the web. It involves defining objectives, identifying the target audience, and devising strategies for gaining a competitive edge in the digital space.',
      points: [
        'Determine optimal brand positioning',
        'Gather target audience data and create user personas',
      ],
      imageSrc: 'https://s3-alpha-sig.figma.com/img/68af/58bd/8332b858ab5de0bc28e35854cccc6675?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=kszPcxCkq9iR3ZsnpWuvpMsLRfOMHNvDgfeSSq3fFJ0pUfMm6oCkPdMsp6WV~ahUdNzgot-Pb5f8MuZ4T5N-MqM1n4pdSQuw8QzCHW7kVYAd~OwZYUJvUtAjh3DrsaTxWJqY-quz9f0Stf8ptX0nFXg~Hf9vWco3dFqyb0rD2QvRrEdqgji7F4YULbkwlEVFcgBj5s5v5HunypOLMhXq0ZM9vUnEylMpsf~ArcrGqU0LQ~mjyAGOWaD9yqNFfQ-txVN4f9-IGthLqCfc6YckxvpImaJKgJfUN9O4B~QcL40b22HqqgJ~IP5BPuWX2JvLQ3QzJl4ezpsBGJa2h0-Qzg__', // replace with actual image source
    },
    'StartInfo Framework (SIF)': {
      title: 'StartInfo Framework (SIF)',
      description:
        'Strategic information architecture is the art and science of organizing and labeling content on websites and web applications. It ensures that users can easily find and comprehend the information they seek.',
      points: [
        'Design site structure, navigation, and page hierarchy',
        'DMap out the conversion funnel for each unique landing page',
      ],
      imageSrc: 'https://s3-alpha-sig.figma.com/img/b91b/28fc/4f5905254052ba973ab01c076a3d036c?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=gd0C8BUj3~kVSXcDre24P0hXQtSKFthZCwdwTgOOBqJVCZNJmp9ZkSospjheJEQFP~GYPUx~6rwYmYdrkrQJrH7Q1L498YDw8eXx8Fx99lhHNjObvrJRcU5QUmxbew8KCnyH5sstHWq7JOqhbM9xGZZAGp1~uCbxZBXluDC9diMQ4E8fKDmW6bNz8mP7Txf69Hbn5SBo9Hp4pi5l5mvcKCsoL-XUzh47FaKfv0mSCN0sESuE5jZrOdLMpA4j2UPwRoxOYOf8T3l5JKq9LwxZIbLgR9TeJrpzi0SO8m~P0xmacPKiPxF7WLAAcFHSHEDx4hO3cKxsvs-PloXnCHpjzg__', // replace with actual image source
    },
    'Designing Creatively Unleashed': {
      title: 'Designing Creatively Unleashed',
      description:
        'Creative design involves the visual and aesthetic aspects of web development. It includes designing layouts, graphics, and other visual elements to create an engaging and user-friendly experience.',
      points: ['Design your custom website', 
        'Incorporate your unique branding elements'],
      imageSrc: 'https://s3-alpha-sig.figma.com/img/9898/56bf/c636e5e72cfb4ce88465df1d025f42b3?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=YvpZ54wTlVXJj0G~VlAcpFoFiwPA7O4ktaLZP9kyfNt5DBykVyz8x-MwY~33MvDN02KScWb~vT0xs1sh215zDwBH-uK~~5P0kcV4PQ5jC4AmG1Nj6bWopexCeXHJcFEk-ua2cyGfdv-6HVUU-lKo580xi2LDtakDAjWAiRCyXh-306ZFLWtAu0KTxAhTyW5CqmQGr8XYitQDhOnBa7nhrdwpuea1cehh~rVj1l57vH~BZpl1qfSdREjzQjvF6AN1ajAisHPFrLwFn1LbQ8IKBL5AQZr7mTyyzHejl1AjX~5heVHMG7Eh2eP0-uMoNlS5Kby1duqrDianJyQliNg3Ig__', // replace with actual image source
    },
    'Responsive Development': {
      title: 'Responsive Development',
      description:
        'Responsive development focuses on creating websites and applications that adapt to different screen sizes and devices. It ensures a consistent and enjoyable user experience across desktops, tablets, and mobile devices.',
      points: ['Write and finalize coding for your website', 'Bring your custom solution to life in a secure staging site'],
      imageSrc: 'https://s3-alpha-sig.figma.com/img/e48e/951b/ab8b33385a1f876b23c53ad19b09e20f?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=HZOIHvDd5F2GRVsDZpX-xgqHgXYvaRELiAxHnf0DCDaJDJTX4vGEb4-56PMGTHeqfKQ6c3oh70DXolX6x7TFfceTKKDcTHFozPhDZ8sYNlcdcmeo6o3M2xQX-vjOKuYunPY8-QojyHdhu8OwwxCQa9Vx0ZIzK7IY5dxdnZKN9ZBtFeVbTXs60NZ0eNGKH~fbLMD0ZUiNtPiRIoqkj0QYiU2OAL63YxKriWSMAL4nWYCxkij2q25q~q8I-T6rM1UZduU5U3YSp6E1VTW6-pMuDqwQmypVHyJtPYKdg0YaJ2M7V6cWKiKxzXq2hufipvgeEdQD4xn2C1Mw7jOx1JjdFw__', // replace with actual image source
    },
    'Quality Assurance (QA)': {
      title: 'Quality Assurance (QA)',
      description:
        'Quality assurance is the process of ensuring that a website or application meets the specified requirements and standards. It involves meticulous testing, debugging, and identifying and rectifying any issues or bugs.',
      points: ['Conduct rigorous testing across the frontend and backend', 'Ensure all features and functionalities work as intended'],
      imageSrc: 'https://s3-alpha-sig.figma.com/img/ec03/99e8/764b72a53a23044856b0512bd9ee5aeb?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=XYbP3JdvRUFikDpBNU6laBLSJJWHD02cGNGJRqpTgBlb8eq~H2XASrL4hPZFH2Gt7-ijHu3mnkqkM7pn8wQpaWnKM43mA0A0VbTKQusP9fwfSqaUsFAFzBzqxo8jtY5NHwab1ubAwNGjU-HnjRnf7ptELV7LlFZACOqbxB6fl9b6x0JUlWnwnfJC1n4Hua4MmhaqrryrnQ~QH0IxZo5nzzwxF8SRaIWpkTU2gdcZmjTwFANqqKPnK5UTI3BHtQ-XowNFD4N5raci10ZvRBrmxM2SwyVKBycivzWF-Wf-5lxGTEoyECznPPXuehDP0GeZmH0AeArozKxBYL2q3ZqUDA__', // replace with actual image source
    },
    'Launch & Optimization': {
      title: 'Launch & Optimization',
      description:
        'Launch optimization involves the final steps before launching a website or application. It includes performance optimization, security checks, and ensuring all elements are in place for a successful launch.',
      points: ['Perform final QA testing', 'Develop a comprehensive marketing plan for launch'],
      imageSrc: 'https://s3-alpha-sig.figma.com/img/3915/473c/412d093747f7007ef48094525a68ca26?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=mWu8Q3VTvtak~UimBPO-TqMjlLi5DjlLEG6Da989uRMFlyeIrdiIYAe4MNwh6bFkkIrKerDaR7UmpeSoLDwGK61YVsOUmJzUyL8o7N-MFd4iA6QzuZT0IzQOygrWaXsD322qNFqhe7WxCtCRK5BfKa1OhqUzPWOH7gzchJ9QR1ssBEqH2kszHRqIeRGf7upp2xYqEP1W5GQCtmdYXmz9cdhhPxJka3JlC-09nNxKI5g0neIXofB9PClCj2B-ZKt9PxJzLI8lY8KnyUOMiqS4tpBNTLdri4YN3ex-SVtfGPEYDzZaC~yfxIOnWKThWnfnEwMmjA6I2DS4bJ-VGB3slg__', // replace with actual image source
    },
  };

  return (
    <div className="min-h-screen bg-white p-9">
      {/* Tabs Section */}
      <div className="flex justify-center space-x-6 bg-blue-600 text-white py-3 px-4 rounded-t-md">
        {Object.keys(tabContent).map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`font-semibold ${
              activeTab === tab
                ? 'border-b-2 border-white'
                : 'hover:border-b-2 hover:border-blue-300'
            } px-4 py-2`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Content Section */}
      <div className="h-[400px] p-8 bg-white rounded-b-md  max-w-9xl mx-auto flex items-start space-x-8">
        {/* Text Content */}
        <div className="flex-1">
          <h2 className="text-2xl font-semibold text-blue-600 mb-4">
            {tabContent[activeTab].title}
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            {tabContent[activeTab].description}
          </p>
          <ul className="text-gray-700 list-disc ml-5 mb-6">
            {tabContent[activeTab].points.map((point, index) => (
              <li key={index}>{point}</li>
            ))}
          </ul>
        </div>

        {/* Image Content */}
        <div className="flex-shrink-0 w-[550px] h-[350px] overflow-hidden">
          <img
            src={tabContent[activeTab].imageSrc}
            alt={tabContent[activeTab].title}
            className="w-full h-full object-cover rounded"
          />
        </div>
      </div>
    </div>
  );
}

export default TabSection;
