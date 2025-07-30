/**
 * Page Content Configuration
 * Contains all page templates and content data
 */
const PageContent = {
    home: `
        <div id="home-content" class="pb-8">
            <!-- Açaí Bowls & Superfoods -->
            <div class="bg-white/90 backdrop-blur-sm rounded-xl p-8 mx-4 mb-12 border border-gray-200 shadow-lg" style="animation: fadeInUp 0.8s ease-out 0.2s both;">
                <div class="max-w-6xl mx-auto">
                    <div class="flex flex-col md:flex-row items-center">
                        <div class="md:w-1/2 md:pr-8 mb-8 md:mb-0" style="animation: fadeInLeft 0.8s ease-out;">
                            <h2 class="text-4xl font-bold text-gray-900 mb-6">Jupiter Pies<br><span class="text-orange-600">Out of This World Pastries</span></h2>
                            <p class="text-xl text-gray-700 mb-6">Welcome to Myrtle Beach's premier pastry destination! Our signature pies and fresh pastries are crafted daily with the finest ingredients, delivering heavenly flavors that are truly stellar.</p>
                            <button class="bg-purple-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-purple-700 transition-colors mt-4" 
                                    onclick="window.PierogiApp.getNavigationManager().navigateToPage('contact')">
                                Visit Us
                            </button>
                        </div>
                        <div class="md:w-1/2 relative flex items-center justify-center" style="animation: fadeInRight 0.8s ease-out;">
                            <div class="bg-white rounded-xl p-1 border border-gray-200 shadow-2xl w-full">
                                <div class="w-full h-64 md:h-80 flex items-center justify-center overflow-hidden rounded-lg">
                                    <img src="./assets/images/lower header.jpg" 
                                         alt="Jupiter Pies - Out of This World Pastries" 
                                         class="max-w-full max-h-full object-cover">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Featured Menu Items -->
            <div class="bg-green-50 backdrop-blur-sm rounded-xl p-8 mx-4 mb-12 border border-green-100 shadow-lg" style="animation: fadeInUp 0.8s ease-out 0.4s both;">
                <div class="text-center w-full mb-12">
                    <h2 class="text-4xl font-bold text-gray-900 section-header">Signature Pies & Pastries</h2>
                    <p class="text-lg text-gray-600 mt-2 max-w-2xl mx-auto">Discover our handcrafted collection of artisanal pies, flaky pastries, and sweet treats made fresh daily</p>
                </div>
                <div class="swiper game-day-swiper max-w-6xl mx-auto swiper-container-fix">
                  <div class="swiper-wrapper items-stretch">
                    <div class="swiper-slide">
                      <div class="bg-white rounded-xl shadow-lg overflow-hidden card-hover border border-gray-200 group swiper-card" style="animation: slideInLeft 0.6s ease-out 0.6s both;">
                          <div class="relative bg-gradient-to-br from-orange-100 to-orange-200 h-48 flex items-center justify-center">
                              <div class="text-8xl group-hover:scale-110 transition-transform duration-300">🥧</div>
                              <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                              <div class="absolute bottom-0 left-0 right-0 p-4">
                                  <h3 class="text-xl font-bold text-white">Apple Pie</h3>
                                  <p class="text-orange-200 text-sm font-medium">$11 - $32</p>
                              </div>
                          </div>
                          <div class="p-4">
                              <p class="text-gray-700 text-sm mb-4">Classic American apple pie made with fresh Granny Smith apples, warm spices, and our signature flaky crust. Available in personal (6") and shareable (9") sizes.</p>
                              <button class="w-full bg-gradient-to-r from-orange-600 to-orange-500 text-white py-2 rounded-lg font-medium hover:opacity-90 transition-opacity" onclick="window.PierogiApp.getNavigationManager().navigateToPage('menu')">
                                  Order Now
                              </button>
                          </div>
                      </div>
                    </div>
                    <div class="swiper-slide">
                      <div class="bg-white rounded-xl shadow-lg overflow-hidden card-hover border border-gray-200 group swiper-card" style="animation: slideInLeft 0.6s ease-out 0.6s both;">
                          <div class="relative bg-gradient-to-br from-yellow-100 to-orange-200 h-48 flex items-center justify-center">
                              <div class="text-8xl group-hover:scale-110 transition-transform duration-300">🍰</div>
                              <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                              <div class="absolute bottom-0 left-0 right-0 p-4">
                                  <h3 class="text-xl font-bold text-white">Sweet Potato Cake</h3>
                                  <p class="text-orange-200 text-sm font-medium">$48</p>
                              </div>
                          </div>
                          <div class="p-4">
                              <p class="text-gray-700 text-sm mb-4">This Jupiter Pies signature cake is featured in Martha Stewart Living Magazine. A sweet potato cake layered with white chocolate mousse and topped with toasted pecans.</p>
                              <button class="w-full bg-gradient-to-r from-orange-600 to-orange-500 text-white py-2 rounded-lg font-medium hover:opacity-90 transition-opacity" onclick="window.PierogiApp.getNavigationManager().navigateToPage('menu')">
                                  Order Now
                              </button>
                          </div>
                      </div>
                    </div>
                    <div class="swiper-slide">
                      <div class="bg-white rounded-xl shadow-lg overflow-hidden card-hover border border-gray-200 group swiper-card" style="animation: slideInLeft 0.6s ease-out 0.6s both;">
                          <div class="relative bg-gradient-to-br from-amber-100 to-orange-200 h-48 flex items-center justify-center">
                              <div class="text-8xl group-hover:scale-110 transition-transform duration-300">🥐</div>
                              <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                              <div class="absolute bottom-0 left-0 right-0 p-4">
                                  <h3 class="text-xl font-bold text-white">Cinnamon Rolls</h3>
                                  <p class="text-orange-200 text-sm font-medium">$5.50 - $22</p>
                              </div>
                          </div>
                          <div class="p-4">
                              <p class="text-gray-700 text-sm mb-4">Over sized cinnamon rolls approximately 5", topped with a generous portion of icing. Available individually or in family packs of 4.</p>
                              <button class="w-full bg-gradient-to-r from-orange-600 to-orange-500 text-white py-2 rounded-lg font-medium hover:opacity-90 transition-opacity" onclick="window.PierogiApp.getNavigationManager().navigateToPage('menu')">
                                  Order Now
                              </button>
                          </div>
                      </div>
                    </div>
                  </div>
                  <!-- Swiper navigation -->
                  <div class="swiper-pagination game-day-swiper-pagination"></div>
                </div>

                <!-- View Full Menu CTA -->
                <div class="text-center mt-12">
                    <a href="#" onclick="window.PierogiApp.getNavigationManager().navigateToPage('menu')" class="inline-block bg-gradient-to-r from-yellow-600 to-yellow-500 text-white px-8 py-4 rounded-xl font-bold text-lg hover:shadow-xl hover:scale-105 transition-all duration-300 transform">
                        View Full Menu
                    </a>
                </div>
            </div>

            <!-- Customer Testimonials -->
            <div class="bg-green-50 backdrop-blur-sm rounded-xl p-8 mx-4 mb-12 border border-green-100 shadow-lg" style="animation: fadeInUp 0.8s ease-out 0.6s both;">
                <div class="text-center w-full mb-12">
                    <h2 class="text-4xl font-bold text-gray-900 section-header">Customer Reviews</h2>
                    <p class="text-lg text-gray-600 mt-2 max-w-2xl mx-auto">Hear what our customers love about Jupiter Pies' out-of-this-world pastries and pies</p>
                </div>
                <div class="swiper fans-say-swiper max-w-4xl mx-auto swiper-container-fix">
                  <div class="swiper-wrapper items-stretch">
                    <div class="swiper-slide">
                      <div class="bg-white rounded-xl shadow-lg overflow-hidden card-hover border border-gray-200 group swiper-card h-full" style="animation: slideInLeft 0.6s ease-out 0.6s both;">
                          <div class="p-6 flex flex-col h-full">
                              <div class="flex items-center mb-4">
                                  <div class="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center text-2xl font-bold text-green-600 mr-4">CR</div>
                                  <div>
                                      <h4 class="font-bold text-gray-900">Carlos R.</h4>
                                      <div class="flex text-yellow-400">
                                          <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
                                      </div>
                                  </div>
                              </div>
                              <p class="text-gray-700 text-sm mb-4 flex-grow">"The Apple Pie at Jupiter Pies is absolutely incredible! The crust is perfectly flaky and the filling has just the right amount of cinnamon and spice. I get the shareable size for family dinners every week!"</p>
                              <div class="text-xs text-gray-500">Regular Customer</div>
                          </div>
                      </div>
                    </div>
                    <div class="swiper-slide">
                      <div class="bg-white rounded-xl shadow-lg overflow-hidden card-hover border border-gray-200 group swiper-card h-full" style="animation: slideInLeft 0.6s ease-out 0.8s both;">
                          <div class="p-6 flex flex-col h-full">
                              <div class="flex items-center mb-4">
                                  <div class="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center text-2xl font-bold text-green-600 mr-4">LM</div>
                                  <div>
                                      <h4 class="font-bold text-gray-900">Luiza M.</h4>
                                      <div class="flex text-yellow-400">
                                          <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
                                      </div>
                                  </div>
                              </div>
                              <p class="text-gray-700 text-sm mb-4 flex-grow">"The Sweet Potato Cake is a masterpiece! I can see why it was featured in Martha Stewart Living Magazine. The white chocolate mousse and toasted pecans make it absolutely divine. Worth every penny!"</p>
                              <div class="text-xs text-gray-500">Cake Enthusiast</div>
                          </div>
                      </div>
                    </div>
                    <div class="swiper-slide">
                      <div class="bg-white rounded-xl shadow-lg overflow-hidden card-hover border border-gray-200 group swiper-card h-full" style="animation: slideInLeft 0.6s ease-out 1.0s both;">
                          <div class="p-6 flex flex-col h-full">
                              <div class="flex items-center mb-4">
                                  <div class="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center text-2xl font-bold text-green-600 mr-4">TP</div>
                                  <div>
                                      <h4 class="font-bold text-gray-900">Thomas P.</h4>
                                      <div class="flex text-yellow-400">
                                          <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
                                      </div>
                                  </div>
                              </div>
                              <p class="text-gray-700 text-sm mb-4 flex-grow">"The Cinnamon Rolls at Jupiter Pies are enormous and absolutely delicious! The icing is perfectly sweet and the rolls are so fluffy. I get the family pack every time I visit Myrtle Beach!"</p>
                              <div class="text-xs text-gray-500">Pastry Lover</div>
                          </div>
                      </div>
                    </div>
                  </div>
                  <!-- Swiper navigation -->
                  <div class="swiper-pagination fans-say-swiper-pagination"></div>
                </div>
            </div>
        </div>
    `,

    // Menu page content is handled dynamically by PageManager

    order: `
        <div id="order-content" class="pt-6 md:pt-12 px-4 md:px-0">
            <div class="text-center mb-6 max-w-4xl mx-auto">
                <h1 class="text-2xl md:text-3xl font-bold text-[var(--text-dark)] mb-2">My Order</h1>
                <p class="text-[var(--text-medium)]">Review your items</p>
            </div>
            
            <div class="max-w-4xl mx-auto">
                <div class="bg-white rounded-lg shadow-md p-4 md:p-6 mb-4 md:mb-6 mx-0">
                    <h2 class="text-lg md:text-xl font-bold text-[var(--text-dark)] mb-3 md:mb-4">Cart Items</h2>
                    <div id="cart-items-list"></div>
                </div>
                
                <div class="bg-white rounded-lg shadow-md p-4 md:p-6 mx-0">
                    <div class="flex justify-between items-center mb-4">
                        <span class="text-lg md:text-xl font-bold text-[var(--text-dark)]">Total:</span>
                        <span id="cart-total" class="text-lg md:text-xl font-bold text-[var(--primary-color)]">$0.00</span>
                    </div>
                    <button class="w-full bg-[var(--primary-color)] text-white py-2 md:py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-colors">
                        Proceed to Checkout
                    </button>
                </div>
            </div>
        </div>
    `,

    about: `
        <div id="about-content" class="pt-12 pb-8">
            <!-- Hero Story Section -->
            <div class="relative bg-gradient-to-br from-green-50 via-white to-orange-50 rounded-xl p-8 mx-4 mb-12 border border-green-100 shadow-lg overflow-hidden" style="animation: fadeInUp 0.8s ease-out 0.2s both;">
                <div class="absolute top-0 right-0 w-32 h-32 bg-green-100 rounded-full -translate-y-16 translate-x-16 opacity-30"></div>
                <div class="absolute bottom-0 left-0 w-24 h-24 bg-orange-100 rounded-full translate-y-12 -translate-x-12 opacity-30"></div>
                
                <div class="relative max-w-6xl mx-auto">
                    <div class="text-center mb-12">
                        <div class="inline-flex items-center justify-center w-16 h-16 bg-green-600 rounded-full mb-6" style="animation: bounceIn 1s ease-out 0.5s both;">
                            <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
                            </svg>
                        </div>
                        <h1 class="text-4xl md:text-5xl font-bold text-gray-900 mb-6" style="animation: fadeInUp 0.8s ease-out 0.3s both;">
                            Our <span class="text-green-600">Story</span>
                        </h1>
                        <p class="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed" style="animation: fadeInUp 0.8s ease-out 0.4s both;">
                            From a simple dream to North Myrtle Beach's premier destination for fresh, organic dining
                        </p>
                    </div>
                </div>
            </div>

            <!-- Origin Story -->
            <div class="bg-white/90 backdrop-blur-sm rounded-xl p-8 mx-4 mb-12 border border-gray-200 shadow-lg" style="animation: fadeInUp 0.8s ease-out 0.6s both;">
                <div class="max-w-6xl mx-auto">
                    <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div class="order-2 lg:order-1" style="animation: fadeInLeft 0.8s ease-out 0.7s both;">
                            <div class="w-12 h-1 bg-green-600 mb-6"></div>
                            <h2 class="text-3xl font-bold text-gray-900 mb-6">Where It All Began</h2>
                            <p class="text-lg text-gray-700 leading-relaxed mb-6">
                                Naturally Healthy was born from a simple belief: that eating well shouldn't mean compromising on taste or convenience. 
                                Founded in 2019 by nutritionist Sarah Chen and chef Marcus Rodriguez, our restaurant emerged from their shared passion 
                                for creating delicious, wholesome meals that nourish both body and soul.
                            </p>
                            <p class="text-lg text-gray-700 leading-relaxed mb-6">
                                After years of witnessing the disconnect between healthy eating and satisfying flavors, Sarah and Marcus decided 
                                to bridge that gap. They spent months perfecting recipes that would prove healthy food could be indulgent, 
                                colorful, and absolutely delicious.
                            </p>
                            <div class="flex items-center space-x-4">
                                <div class="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                                    <span class="text-green-600 font-bold text-lg">SC</span>
                                </div>
                                <div class="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                                    <span class="text-orange-600 font-bold text-lg">MR</span>
                                </div>
                                <div class="text-sm text-gray-600">
                                    <p class="font-semibold">Sarah Chen & Marcus Rodriguez</p>
                                    <p>Co-Founders</p>
                                </div>
                            </div>
                        </div>
                        <div class="order-1 lg:order-2" style="animation: fadeInRight 0.8s ease-out 0.7s both;">
                            <div class="relative">
                                <div class="bg-gradient-to-br from-green-100 to-orange-100 rounded-2xl p-8 text-center">
                                    <div class="text-6xl mb-4">🌱</div>
                                    <h3 class="text-xl font-bold text-gray-900 mb-2">Our Philosophy</h3>
                                    <p class="text-gray-700">"Healthy food should make you feel amazing, not deprived"</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Our Values Grid -->
            <div class="bg-gradient-to-r from-green-50 to-orange-50 rounded-xl p-8 mx-4 mb-12 border border-green-100 shadow-lg" style="animation: fadeInUp 0.8s ease-out 0.8s both;">
                <div class="max-w-6xl mx-auto">
                    <div class="text-center mb-12">
                        <h2 class="text-3xl font-bold text-gray-900 mb-4">What Drives Us</h2>
                        <p class="text-lg text-gray-600 max-w-2xl mx-auto">Every decision we make is guided by these core values that define who we are</p>
                    </div>
                    
                    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        <div class="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group">
                            <div class="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4 group-hover:bg-green-200 transition-colors">
                                <svg class="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"></path>
                                </svg>
                            </div>
                            <h3 class="text-lg font-bold text-gray-900 mb-2">Fresh & Local</h3>
                            <p class="text-gray-600 text-sm">We source from local farms within 50 miles, ensuring peak freshness and supporting our community</p>
                        </div>
                        
                        <div class="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group">
                            <div class="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mb-4 group-hover:bg-orange-200 transition-colors">
                                <svg class="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"></path>
                                </svg>
                            </div>
                            <h3 class="text-lg font-bold text-gray-900 mb-2">Organic First</h3>
                            <p class="text-gray-600 text-sm">95% of our ingredients are certified organic, free from pesticides and artificial additives</p>
                        </div>
                        
                        <div class="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group">
                            <div class="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-4 group-hover:bg-purple-200 transition-colors">
                                <svg class="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                                </svg>
                            </div>
                            <h3 class="text-lg font-bold text-gray-900 mb-2">Community</h3>
                            <p class="text-gray-600 text-sm">We're more than a restaurant - we're a hub for health-conscious neighbors and friends</p>
                        </div>
                        
                        <div class="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group">
                            <div class="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4 group-hover:bg-blue-200 transition-colors">
                                <svg class="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                </svg>
                            </div>
                            <h3 class="text-lg font-bold text-gray-900 mb-2">Sustainable</h3>
                            <p class="text-gray-600 text-sm">Eco-friendly packaging, zero-waste kitchen practices, and carbon-neutral delivery</p>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Our Impact -->
            <div class="bg-white/90 backdrop-blur-sm rounded-xl p-8 mx-4 mb-12 border border-gray-200 shadow-lg" style="animation: fadeInUp 0.8s ease-out 1.0s both;">
                <div class="max-w-6xl mx-auto">
                    <div class="text-center mb-12">
                        <h2 class="text-3xl font-bold text-gray-900 mb-4">Our Impact</h2>
                        <p class="text-lg text-gray-600 max-w-2xl mx-auto">Numbers that reflect our commitment to health, community, and sustainability</p>
                    </div>
                    
                    <div class="grid grid-cols-2 lg:grid-cols-4 gap-8">
                        <div class="text-center">
                            <div class="text-4xl font-bold text-green-600 mb-2">50K+</div>
                            <p class="text-gray-700 font-medium">Healthy Meals Served</p>
                            <p class="text-sm text-gray-500 mt-1">Since 2019</p>
                        </div>
                        <div class="text-center">
                            <div class="text-4xl font-bold text-orange-600 mb-2">25</div>
                            <p class="text-gray-700 font-medium">Local Farm Partners</p>
                            <p class="text-sm text-gray-500 mt-1">Within 50 miles</p>
                        </div>
                        <div class="text-center">
                            <div class="text-4xl font-bold text-purple-600 mb-2">95%</div>
                            <p class="text-gray-700 font-medium">Organic Ingredients</p>
                            <p class="text-sm text-gray-500 mt-1">Certified organic</p>
                        </div>
                        <div class="text-center">
                            <div class="text-4xl font-bold text-blue-600 mb-2">4.9★</div>
                            <p class="text-gray-700 font-medium">Customer Rating</p>
                            <p class="text-sm text-gray-500 mt-1">Over 1,200 reviews</p>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Our Promise -->
            <div class="bg-gradient-to-br from-green-600 to-orange-600 rounded-xl p-8 mx-4 mb-12 text-white shadow-lg relative overflow-hidden" style="animation: fadeInUp 0.8s ease-out 1.2s both;">
                <div class="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full -translate-y-20 translate-x-20"></div>
                <div class="absolute bottom-0 left-0 w-32 h-32 bg-white/10 rounded-full translate-y-16 -translate-x-16"></div>
                
                <div class="relative max-w-4xl mx-auto text-center">
                    <div class="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-full mb-6">
                        <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
                        </svg>
                    </div>
                    <h2 class="text-3xl font-bold mb-6">Our Promise to You</h2>
                    <p class="text-xl leading-relaxed mb-8 opacity-90">
                        Every meal we serve is a commitment to your health, our community, and our planet. 
                        We promise to never compromise on quality, freshness, or flavor. When you dine with us, 
                        you're not just nourishing your body—you're supporting a movement toward better food, 
                        better health, and a better world.
                    </p>
                    <div class="flex flex-col sm:flex-row gap-4 justify-center">
                        <button onclick="window.PierogiApp.getNavigationManager().navigateToPage('menu')" 
                                class="bg-white text-green-600 px-8 py-3 rounded-full font-bold hover:bg-gray-100 transition-colors">
                            Explore Our Menu
                        </button>
                        <button onclick="window.PierogiApp.getNavigationManager().navigateToPage('contact')" 
                                class="border-2 border-white text-white px-8 py-3 rounded-full font-bold hover:bg-white hover:text-green-600 transition-colors">
                            Visit Us Today
                        </button>
                    </div>
                </div>
            </div>
        </div>
                            Every scoop of our Açaí represents a commitment to quality, sustainability, and your wellbeing. We're dedicated to bringing you the most authentic Açaí experience outside of Brazil, packed with antioxidants, essential nutrients, and incredible flavor. Whether you're starting your day, refueling after a workout, or treating yourself to something delicious, our Açaí bowls are crafted to nourish your body and delight your taste buds. Join us in celebrating the power of this incredible superfood!
                        </p>
                    </div>
                </div>


            </div>
        </div>
    `,

    contact: `
        <div id="contact-content" class="max-w-2xl mx-auto px-4 py-8 w-full">
            <div class="text-center mb-8">
                <h1 class="text-3xl font-bold text-white mb-4">Contact Us</h1>
                <p class="text-lg text-[var(--text-medium)]">We'd love to hear from you!</p>
            </div>
            
            <div class="space-y-6 w-full">
                <div class="bg-white rounded-lg shadow-md p-6 w-full">
                    <h2 class="text-xl font-bold text-[var(--text-dark)] mb-4">Get in Touch</h2>
                    <div class="space-y-4">
                        <div class="flex flex-col sm:flex-row sm:items-baseline gap-x-3">
                            <span class="text-[var(--primary-color)] font-semibold whitespace-nowrap">Phone:</span>
                            <a href="tel:843-668-2625" class="text-[var(--text-medium)] hover:text-yellow-400 transition-colors">(843) 668-2625</a>
                        </div>
                        <div class="flex flex-col sm:flex-row sm:items-center gap-x-3">
                            <span class="text-[var(--primary-color)] font-semibold whitespace-nowrap">Email:</span>
                            <button onclick="navigator.clipboard.writeText('info@camillascafe.com').then(() => { const btn = event.target; const originalText = btn.innerHTML; btn.innerHTML = '✓ Copied to clipboard!'; btn.classList.add('text-green-500'); setTimeout(() => { btn.innerHTML = originalText; btn.classList.remove('text-green-500'); }, 2000); })" 
                                    class="inline-flex items-center gap-2 px-3 py-1.5 bg-[var(--primary-color)] text-white rounded-md hover:bg-yellow-600 transition-colors w-fit"
                                    title="Click to copy email">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                                Copy Email
                            </button>
                        </div>
                        <div class="flex flex-col sm:flex-row sm:items-baseline gap-x-3">
                            <span class="text-[var(--primary-color)] font-semibold whitespace-nowrap">Address:</span>
                            <span class="text-[var(--text-medium)]">9261 SC-707 Unit A, Myrtle Beach, SC 29588</span>
                        </div>
                    </div>
                </div>
                
                <div class="bg-white rounded-lg shadow-md p-6 w-full">
                    <h2 class="text-xl font-bold text-[var(--text-dark)] mb-4">Hours</h2>
                    <div class="space-y-2">
                        <div class="flex flex-col xs:flex-row justify-between">
                            <span class="text-[var(--text-medium)]">Sunday:</span>
                            <span class="text-[var(--text-dark)] font-medium">Closed</span>
                        </div>
                        <div class="flex flex-col xs:flex-row justify-between">
                            <span class="text-[var(--text-medium)]">Monday:</span>
                            <span class="text-[var(--text-dark)] font-medium">Closed</span>
                        </div>
                        <div class="flex flex-col xs:flex-row justify-between">
                            <span class="text-[var(--text-medium)]">Tuesday:</span>
                            <span class="text-[var(--text-dark)] font-medium">12:00 PM - 5:00 PM</span>
                        </div>
                        <div class="flex flex-col xs:flex-row justify-between">
                            <span class="text-[var(--text-medium)]">Wednesday:</span>
                            <span class="text-[var(--text-dark)] font-medium">12:00 PM - 5:00 PM</span>
                        </div>
                        <div class="flex flex-col xs:flex-row justify-between">
                            <span class="text-[var(--text-medium)]">Thursday:</span>
                            <span class="text-[var(--text-dark)] font-medium">12:00 PM - 5:00 PM</span>
                        </div>
                        <div class="flex flex-col xs:flex-row justify-between">
                            <span class="text-[var(--text-medium)]">Friday:</span>
                            <span class="text-[var(--text-dark)] font-medium">12:00 PM - 5:00 PM</span>
                        </div>
                        <div class="flex flex-col xs:flex-row justify-between">
                            <span class="text-[var(--text-medium)]">Saturday:</span>
                            <span class="text-[var(--text-dark)] font-medium">12:00 PM - 5:00 PM</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `,

};
