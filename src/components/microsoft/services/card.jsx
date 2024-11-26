import React from "react";

function Card() {
  const services = [
    {
      image: "https://s3-alpha-sig.figma.com/img/40be/e624/d5d8966911dc5e7b4559abee168985c5?Expires=1733702400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=LJYW-ecjGs6HdBaM~DVqdYQr7dHWDyriMP9~haYF~o5EoBIFXxXMd-gKLJMsFGO7j1EW3t9aDq1mRgGWXdnd-1M5zu2mNX83seF2VsLG9Q~iuQ5rce-jS9Xkzq5Ve9Vgh~-LvJsZYaiRXysRmCfnYUDFZByzUZyedmJNYnlrKZnzM698JYnki~wofXiCA5-G4QmVW2a1~xR~1Sd-WuXaryPwhzD~pnX7ei11CPPL6XNsxTWkKs5zlprcvdDBEMgBLGygtIsfoezWDmG-Wq1ONzLr6UauKRI-0H9Fali81Hk9KKH-nmeyqTtINQ7AJ8KqqXnT8aLdmLxpb8wzkPu79w__",
      title: "Microsoft Azure Integration and Migration",
      description:
        "Harness the power of the cloud with Microsoft Azure. Our experts specialize in seamless integration and migration, enabling you to scale your infrastructure.",
    },
    // {
    //   image: image2,
    //   title: "Office 365 Collaboration and Productivity",
    //   description:
    //     "Boost productivity with Office 365. From email and document management to real-time collaboration tools like Teams, Spyd ensures you leverage the full potential of Office 365.",
    // },
    {
      image: "https://s3-alpha-sig.figma.com/img/033f/1691/e66ba5ac91e61b4c7bb9097dc0e3bb9b?Expires=1733702400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=SSzzxFKnj3Vtf6M-0qC65sNsNE6ql4kCBJoVWC7mzULTOG5Pq~UZ4y5fzPd9y9E-LVrF9L8RWnKoWu6waGqq6LwDoy89l3sl9P-1eD1irOiEkNYyiqytJO9uWXDLr7JAL4fDZWjm0tW4ahpq6QAuu42rQbcd2-DXkBrz5UMTET6N20BfbUOo0sQubPhDpnBCwMgig3AgrvgkIqNMmk3nDtGxx~A7hfAmoCtaIYfGkLAmN64FYcvBfxiCyaeaGeGS14LrHe69F83RAg5o3n9cSjydNcupNTdwSbjBLFUHV0DlH5TfG9O1FJNGbFlqX~ajFkM8N0PclsNVjG8A0B9pYQ__",
      title: "Microsoft Dynamics 365 CRM and ERP Solutions",
      description:
        "Transform customer relationships and streamline business processes with Microsoft Dynamics 365. Our tailored CRM and ERP solutions empower you to deliver exceptional customer experiences.",
    },
    {
      image: "https://s3-alpha-sig.figma.com/img/e489/fd16/faded614b3c022b70ea1eb20c9987862?Expires=1733702400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=QrpZl24ix2uyuug7Qacx453Rwo8VLKwgdsaVhBU9TvZ3A2WcQZcIt8ILR0d7Gr~v931Gl6Riy-bxh7sW7SyDY~O5-iiDrrXWnDtxGVUyH8L1zOmMRtvvvQlwP~GDkawp8UMkdd1DqEK8ghih3VO8zZvg4JTzVURidYOJBRSKTHsVI9rW6JsQXtm3Irr~9WHatCS3g9EtFSsO79yPRGq60BR-VYKxRfdA5xt~m~G5UbfKMzaOfA6hgUVqD1x4oQBKqGZvhoKyl1S-OW1r2ktMaGsyLuWnrkNUNaagLyLJ6U7ixYd~E85E0gWuGsrif2VN1v7LiLM5TnCGKtX6kiB~ZQ__",
      title: "Custom Development and Integration Services",
      description:
        "Tailor Microsoft solutions to your unique needs with Spyd's custom development and integration services. Our experienced developers build bespoke solutions.",
    },
    {
      image: "https://s3-alpha-sig.figma.com/img/80cb/c118/614be9cfb315724106b388a1e0067300?Expires=1733702400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=jAcPgonMqJ6HLouwU2wBTXYIfTZ88FtGNzmZtvo2Y8gu7M9gKQsZB2MH2SozFwEuSevApoFLRilOPLvyAc7-xROEhZ-ccgNamGfcSnRRt-d8tVBBCjANFF5z1-VXhKrrw2L87fmEmj4J0mj-MgekCcGEczLPK0PFRqW78UPF063QD9VO6Xbr2Z3uiPlxbI2qCsrOMEWoxSZKds9YDVHB5w1F8QDX0zENPPgdGMS~ubrtWefA2GwIKNm8IVbTkoRB~F3Vk-s0m9~sjGIXVV04grJc5CkA~sUkfAfRNuyPEQgVo9PNBomRCYxx6-wOECFeK42AlOqAPNb5cRui16u7Pw__",
      title: "Custom Development and Integration Services",
      description:
        "Tailor Microsoft solutions to your unique needs with Spyd's custom development and integration services. Our experienced developers build bespoke solutions.",
    },
    {
      image: "https://s3-alpha-sig.figma.com/img/0e8c/2ba1/3655ec26e8ed7be053f97d37ff77a4b5?Expires=1733702400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=FGGppWSgPOgWU9-2r0cudZA-qwL31p8Mgv~-QbxWWO36B1Yo81u0gDCizkUfGkIPdfTCWgGjsU2JHt7TBePnOXdmnsqVbc2XYxsrzJRbEP~2eEkxIzM7EjUp5iEPWlMqJkcNaJBkavxHaxAASx3682hYy6wG2qESiUeh9B20Os53kC9NEJAlDBCGgaa3uPCLBeCHbWu1BTu3qSQ7PYSW3NW7tIRl7MYctBq-h~NYf3tZ1D~SeqAQibCsaNkdJyuOvAZMDFfoUUHFCU0q3rRh7hJWSqb8n2ZDrTAuUQh~F8zrkNo4UcocJdtb0G0UDG8chCfcOgTdkfuInkurbHxMXQ__",
      title: "Custom Development and Integration Services",
      description:
        "Tailor Microsoft solutions to your unique needs with Spyd's custom development and integration services. Our experienced developers build bespoke solutions.",
    },
    {
      image: "https://s3-alpha-sig.figma.com/img/7aed/5579/5d77cf8be3d9ba0510c593fd80dc19f1?Expires=1733702400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=HA5JPoz2mm6S-5Jc~Y3es9ScG~MP~NhXs0i3ZQLX5N1kFbYlbZNjAgU9k7EQDmRQrgMhdM8UG7WQYCXwmwjPl0no55g969C06~bybwmXCo5xWpazM7ajrKGVHef4ICfBhuak0DqsNYlINGrgHo1jGcz3eGjf68XlEze-wdkWggls-UPttPNcL1GliLUryTn8Qth5NrFm8-aQjnrZPcpTnNxO3ClTwmEsCzj-ohNAv4e8J86IrpYjxG3sMs0oSqDpzbIvgmywFtOoNIqic~KGFiFc4592nTvYuv8~mLhyOVauv-W9u6gtNQ~50~Q1Falfe4vfU6Y-LM4mJwdHW24F2Q__",
      title: "Custom Development and Integration Services",
      description:
        "Tailor Microsoft solutions to your unique needs with Spyd's custom development and integration services. Our experienced developers build bespoke solutions.",
    },
    {
      image: "https://s3-alpha-sig.figma.com/img/f232/58ee/7469f97a9fdcab6942e642ebd227d03c?Expires=1733702400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=RETG-~bHMBalmsz3t-eke37pppUF976W82ewEsVGqPvk3~K1fHgV~Rllccqe5FHJBVmUEbWSWHRRIg6VKp-rtAGr-SarNAaU10zCK3g1C~Mo2CY29tFQqT7Ax0r0snsW5HuZFO9j7M4tpZHy8W~ZSrIDl0aiuoSigKAvXcNYKnAxuNBbKLAbelgcMLfNZvIQ69ZQnXBJhaCuXqpwdQs9199pWHua2gAaPwR0nh6BiZ5ifq8VUj-FR~ss17Z7bY6Rl~DC0y83Zu7PHSB9P5CiepMxCtA8oNQp4w~~zAofwsPbNEPTeblLaI3gUKGqpZ-kvU4vnl8FpWiGe3t4I6Q~fw__",
      title: "Custom Development and Integration Services",
      description:
        "Tailor Microsoft solutions to your unique needs with Spyd's custom development and integration services. Our experienced developers build bespoke solutions.",
    },
  ];

  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8">
      {/* Main Heading */}
      <h2 className="text-3xl font-bold text-center text-[#00CEFF] mb-12">
        Our Services
      </h2>
      
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-[#00CEFF] rounded-lg shadow-lg hover:shadow-2xl transition duration-300 transform hover:scale-105"
          >
            <img
              src={service.image}
              alt={service.title}
              className="w-full h-48 object-cover rounded-t-lg"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-white">{service.title}</h3>
              <p className="mt-2 text-white">{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Card;
