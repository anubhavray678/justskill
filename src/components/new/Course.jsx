const Course = () => {
  return (
    <section>
      <div class="flex items-center justify-center py-4 md:py-8 flex-wrap">
        <button
          type="button"
          class="text-blue-700 hover:text-white border border-blue-600 bg-white hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-full text-base font-medium px-5 py-2.5 text-center me-3 mb-3 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:bg-gray-900 dark:focus:ring-blue-800"
        >
          All categories
        </button>
        <button
          type="button"
          class="text-gray-900 border border-white hover:border-gray-200 dark:border-gray-900 dark:bg-gray-900 dark:hover:border-gray-700 bg-white focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-full text-base font-medium px-5 py-2.5 text-center me-3 mb-3 dark:text-white dark:focus:ring-gray-800"
        >
          Shoes
        </button>
        <button
          type="button"
          class="text-gray-900 border border-white hover:border-gray-200 dark:border-gray-900 dark:bg-gray-900 dark:hover:border-gray-700 bg-white focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-full text-base font-medium px-5 py-2.5 text-center me-3 mb-3 dark:text-white dark:focus:ring-gray-800"
        >
          Bags
        </button>
        <button
          type="button"
          class="text-gray-900 border border-white hover:border-gray-200 dark:border-gray-900 dark:bg-gray-900 dark:hover:border-gray-700 bg-white focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-full text-base font-medium px-5 py-2.5 text-center me-3 mb-3 dark:text-white dark:focus:ring-gray-800"
        >
          Electronics
        </button>
        <button
          type="button"
          class="text-gray-900 border border-white hover:border-gray-200 dark:border-gray-900 dark:bg-gray-900 dark:hover:border-gray-700 bg-white focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-full text-base font-medium px-5 py-2.5 text-center me-3 mb-3 dark:text-white dark:focus:ring-gray-800"
        >
          Gaming
        </button>
      </div>
      <div class="grid grid-cols-2 md:grid-cols-3 gap-4">
        <div className="h-32 bg-purple-300">
          <div class="h-full max-w-full rounded-lg">Courses</div>
        </div>
        <div className="h-32">
          <img
            class="h-full max-w-full rounded-lg"
            src="https://cdn.shopify.com/s/files/1/0306/6419/6141/articles/coding_languages.png?v=1619126283 "
            alt=""
          />
        </div>
        <div className="h-32">
          <img
            class="h-full max-w-full rounded-lg"
            src="https://www.springboard.com/blog/wp-content/uploads/2022/06/coding-.png"
            alt=""
          />
        </div>
        <div className="h-32">
          <img
            class="h-full max-w-full rounded-lg"
            src="https://media.thekashmirmonitor.net/wp-content/uploads/2022/03/upsc1579076777550.jpg"
            alt=""
          />
        </div>
        <div className="h-32">
          <img
            class="h-full max-w-full rounded-lg"
            src="https://oswalpublishers.com/wp-content/uploads/2023/01/jee-vs-neet.webp"
            alt=""
          />
        </div>
        <div className="h-32">
          <img
            class="h-full max-w-full rounded-lg"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrhfqVX9-5Jie8MAN46QIPASSe0EQjJpPOWA&s"
            alt=""
          />
        </div>
      </div>
    </section>
  );
};
export default Course;
