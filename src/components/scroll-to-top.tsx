import { Component } from "solid-js";

const ScrollToTop: Component = () => {

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }
  
  return (
    <div class="cursor-pointer w-10 h-10 rounded-full fixed bottom-10 right-10 bg-[#3B3030] p-2" onClick={handleScrollToTop}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path class="text-[#FFF0D1]" d="M342.6 73.4C330.1 60.9 309.8 60.9 297.3 73.4L137.3 233.4C124.8 245.9 124.8 266.2 137.3 278.7C149.8 291.2 170.1 291.2 182.6 278.7L288 173.3L288 544C288 561.7 302.3 576 320 576C337.7 576 352 561.7 352 544L352 173.3L457.4 278.7C469.9 291.2 490.2 291.2 502.7 278.7C515.2 266.2 515.2 245.9 502.7 233.4L342.7 73.4z" fill="#fff"/></svg>
    </div>
  )
};

export default ScrollToTop;