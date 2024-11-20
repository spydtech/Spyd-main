import React from "react";

const Hero = () => {
  return (
    <div
      className="relative w-full h-[400px] bg-cover bg-center"
      style={{
        backgroundImage: `url("https://s3-alpha-sig.figma.com/img/788b/1ef0/963e2e735ba54161b360d3bcf2c5a99d?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=eGNxhMHLoP3qskS3~dp60uqTAa9t3UWemBNlPpf77j1GDZ91vbbGWZbdxCIgJOMcTSTF0Qx63ptykhRX2CKNaPcOK6wsvEh6Jmy2y8-3ePeXH3491z5VGZY5hiv7B5o5cOAucfYzhNwbSillMHWHkJTBbzuTd5CAWNd2b5EYuKRFzMVJWA4fDZZ-0rzIBYO86VutVN~7LRZE6K3dUW~GJCGyaDjNIaY7jNKTWrZZgx2owIcZJRKVNrluOXrCwzzRX9u96JAX0E5PKGZI2IWqIKlHRTtG-JCskYlPNmXP8cobFzUnHGIvnSr~vOPtSaZOe32SacPR6ANJsEXrUDbwDQ__")`,
      }}
    >
      <div className="absolute inset-0 flex flex-col justify-center items-center gap-3">
        <h1 className="text-4xl text-white">Drive Your Candidate Experience</h1>
        <p className="text-center text-white">
          Drive & convert top talent with technology-enabled staffing websites,
          job <br /> boards, and career portals.
        </p>
      </div>
      <div className="absolute inset-0 flex items-center mt-44 justify-center">
        <button className="px-6 py-3 text-[20px] font-medium text-white bg-[#0866E2] rounded-xl">
          Book a Demo
        </button>
      </div>
    </div>
  );
};

export default Hero;
