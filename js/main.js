/**
 * Pawfect World - Main JavaScript File
 * Author: Trae AI
 * Version: 1.0
 */

(function($) {
    'use strict';
    
    // Document Ready Function
    $(document).ready(function() {
        // Initialize functions
        mobileMenu();
        heroSlider();
        categorySlider();
        testimonialSlider();
        productQuantity();
        backToTop();
        stickyHeader();
        dropdownToggle();
        productGallery();
        priceRange();
        productTabs();
        quickView();
        cartDrawer();
        checkoutAccordion();
        passwordToggle();
        newsletterPopup();
        countdownTimer();
        checkoutProcess();
        cartFunctionality();
        
        // Initialize new features
        vetBookingForm();
        petPhotoUpload();
        socialSharing();
    });
    
    // Mobile Menu
    function mobileMenu() {
        // Toggle mobile menu
        $('.mobile-menu-toggle').on('click', function() {
            $(this).toggleClass('active');
            $('.main-nav').toggleClass('active');
            $('.menu-overlay').toggleClass('active');
            $('body').toggleClass('menu-open');
        });
        
        // Close menu when overlay is clicked
        $('.menu-overlay').on('click', function() {
            $('.mobile-menu-toggle').removeClass('active');
            $('.main-nav').removeClass('active');
            $('.menu-overlay').removeClass('active');
            $('body').removeClass('menu-open');
        });
        
        // Add dropdown toggle for mobile
        $('.has-dropdown > a').append('<span class="dropdown-toggle"><i class="fas fa-chevron-down"></i></span>');
        
        // Toggle dropdown on mobile
        $('.dropdown-toggle').on('click', function(e) {
            e.preventDefault();
            $(this).toggleClass('active');
            $(this).closest('li').find('> .dropdown-menu, > .mega-menu').slideToggle();
        });
        
        // Close menu on window resize
        $(window).on('resize', function() {
            if ($(window).width() > 991) {
                $('.mobile-menu-toggle').removeClass('active');
                $('.main-nav').removeClass('active');
                $('.menu-overlay').removeClass('active');
                $('body').removeClass('menu-open');
                $('.dropdown-menu, .mega-menu').removeAttr('style');
            }
        });
    }
    
    // Hero Slider
    function heroSlider() {
        // This is a placeholder for a slider implementation
        // In a real project, you would use a library like Slick or Swiper
        console.log('Hero slider initialized');
        
        // Example implementation with slick slider
        // $('.hero-slider').slick({
        //     autoplay: true,
        //     autoplaySpeed: 5000,
        //     arrows: true,
        //     dots: true,
        //     fade: true,
        //     prevArrow: '<button class="slick-prev"><i class="fas fa-chevron-left"></i></button>',
        //     nextArrow: '<button class="slick-next"><i class="fas fa-chevron-right"></i></button>'
        // });
    }
    
    // Category Slider
    function categorySlider() {
        // This is a placeholder for a slider implementation
        console.log('Category slider initialized');
        
        // Example implementation with slick slider
        // $('.category-slider').slick({
        //     slidesToShow: 5,
        //     slidesToScroll: 1,
        //     autoplay: true,
        //     autoplaySpeed: 3000,
        //     arrows: true,
        //     dots: false,
        //     prevArrow: '<button class="slick-prev"><i class="fas fa-chevron-left"></i></button>',
        //     nextArrow: '<button class="slick-next"><i class="fas fa-chevron-right"></i></button>',
        //     responsive: [
        //         {
        //             breakpoint: 1200,
        //             settings: {
        //                 slidesToShow: 4
        //             }
        //         },
        //         {
        //             breakpoint: 992,
        //             settings: {
        //                 slidesToShow: 3
        //             }
        //         },
        //         {
        //             breakpoint: 768,
        //             settings: {
        //                 slidesToShow: 2
        //             }
        //         },
        //         {
        //             breakpoint: 576,
        //             settings: {
        //                 slidesToShow: 1
        //             }
        //         }
        //     ]
        // });
    }
    
    // Testimonial Slider
    function testimonialSlider() {
        // This is a placeholder for a slider implementation
        console.log('Testimonial slider initialized');
        
        // Example implementation with slick slider
        // $('.testimonial-slider').slick({
        //     slidesToShow: 3,
        //     slidesToScroll: 1,
        //     autoplay: true,
        //     autoplaySpeed: 4000,
        //     arrows: true,
        //     dots: true,
        //     prevArrow: '<button class="slick-prev"><i class="fas fa-chevron-left"></i></button>',
        //     nextArrow: '<button class="slick-next"><i class="fas fa-chevron-right"></i></button>',
        //     responsive: [
        //         {
        //             breakpoint: 992,
        //             settings: {
        //                 slidesToShow: 2
        //             }
        //         },
        //         {
        //             breakpoint: 768,
        //             settings: {
        //                 slidesToShow: 1
        //             }
        //         }
        //     ]
        // });
    }
    
    // Product Quantity
    function productQuantity() {
        // Increase quantity
        $(document).on('click', '.quantity-plus', function() {
            var $input = $(this).siblings('input');
            var val = parseInt($input.val());
            $input.val(val + 1).trigger('change');
        });
        
        // Decrease quantity
        $(document).on('click', '.quantity-minus', function() {
            var $input = $(this).siblings('input');
            var val = parseInt($input.val());
            if (val > 1) {
                $input.val(val - 1).trigger('change');
            }
        });
    }
    
    // Back to Top Button
    function backToTop() {
        var $backToTop = $('.back-to-top');
        
        $(window).on('scroll', function() {
            if ($(this).scrollTop() > 300) {
                $backToTop.addClass('active');
            } else {
                $backToTop.removeClass('active');
            }
        });
        
        $backToTop.on('click', function(e) {
            e.preventDefault();
            $('html, body').animate({scrollTop: 0}, 800);
        });
    }
    
    // Sticky Header
    function stickyHeader() {
        var $header = $('.header');
        var headerHeight = $header.outerHeight();
        var $placeholder = $('<div class="header-placeholder"></div>').height(headerHeight);
        
        $(window).on('scroll', function() {
            if ($(this).scrollTop() > headerHeight) {
                $header.addClass('sticky');
                if (!$('.header-placeholder').length) {
                    $header.after($placeholder);
                }
            } else {
                $header.removeClass('sticky');
                $('.header-placeholder').remove();
            }
        });
    }
    
    // Dropdown Toggle
    function dropdownToggle() {
        // This function handles dropdown toggles for desktop
        // Mobile dropdowns are handled in the mobileMenu function
    }
    
    // Product Gallery
    function productGallery() {
        // This is a placeholder for product gallery functionality
        console.log('Product gallery initialized');
        
        // Example implementation with slick slider
        // $('.product-gallery-slider').slick({
        //     slidesToShow: 1,
        //     slidesToScroll: 1,
        //     arrows: false,
        //     fade: true,
        //     asNavFor: '.product-gallery-nav'
        // });
        // 
        // $('.product-gallery-nav').slick({
        //     slidesToShow: 4,
        //     slidesToScroll: 1,
        //     asNavFor: '.product-gallery-slider',
        //     dots: false,
        //     arrows: true,
        //     focusOnSelect: true,
        //     prevArrow: '<button class="slick-prev"><i class="fas fa-chevron-left"></i></button>',
        //     nextArrow: '<button class="slick-next"><i class="fas fa-chevron-right"></i></button>'
        // });
    }
    
    // Price Range Slider
    function priceRange() {
        // This is a placeholder for price range slider functionality
        console.log('Price range slider initialized');
        
        // Example implementation with jQuery UI slider
        // $('.price-slider').slider({
        //     range: true,
        //     min: 0,
        //     max: 1000,
        //     values: [0, 500],
        //     slide: function(event, ui) {
        //         $('.price-min').text('$' + ui.values[0]);
        //         $('.price-max').text('$' + ui.values[1]);
        //         $('#min-price').val(ui.values[0]);
        //         $('#max-price').val(ui.values[1]);
        //     }
        // });
    }
    
    // Product Tabs
    function productTabs() {
        $('.product-tabs-nav a').on('click', function(e) {
            e.preventDefault();
            var tab = $(this).attr('href');
            
            // Remove active class from all tabs
            $('.product-tabs-nav a').removeClass('active');
            $('.product-tab-content').removeClass('active');
            
            // Add active class to current tab
            $(this).addClass('active');
            $(tab).addClass('active');
        });
    }
    
    // Quick View
    function quickView() {
        // Open quick view modal
        $(document).on('click', '.quick-view', function(e) {
            e.preventDefault();
            // In a real implementation, you would load product data via AJAX
            // and populate the modal with the data
            $('#quick-view-modal').fadeIn();
            $('body').addClass('modal-open');
        });
        
        // Close quick view modal
        $(document).on('click', '.modal-close, .modal-overlay', function() {
            $('.modal').fadeOut();
            $('body').removeClass('modal-open');
        });
    }
    
    // Cart Drawer
    function cartDrawer() {
        // Open cart drawer
        $('.cart-icon').on('click', function(e) {
            e.preventDefault();
            $('.cart-drawer').addClass('active');
            $('.cart-overlay').addClass('active');
            $('body').addClass('drawer-open');
        });
        
        // Close cart drawer
        $('.cart-drawer-close, .cart-overlay').on('click', function() {
            $('.cart-drawer').removeClass('active');
            $('.cart-overlay').removeClass('active');
            $('body').removeClass('drawer-open');
        });
    }
    
    // Checkout Accordion
    function checkoutAccordion() {
        $('.checkout-step-heading').on('click', function() {
            var $step = $(this).parent();
            
            if ($step.hasClass('active')) {
                $step.removeClass('active');
                $step.find('.checkout-step-content').slideUp();
            } else {
                $('.checkout-step').removeClass('active');
                $('.checkout-step-content').slideUp();
                $step.addClass('active');
                $step.find('.checkout-step-content').slideDown();
            }
        });
    }
    
    // Password Toggle
    function passwordToggle() {
        $('.password-toggle').on('click', function() {
            var $input = $(this).siblings('input');
            var $icon = $(this).find('i');
            
            if ($input.attr('type') === 'password') {
                $input.attr('type', 'text');
                $icon.removeClass('fa-eye').addClass('fa-eye-slash');
            } else {
                $input.attr('type', 'password');
                $icon.removeClass('fa-eye-slash').addClass('fa-eye');
            }
        });
    }
    
    // Newsletter Popup
    function newsletterPopup() {
        // Check if user has closed the popup before
        if (!localStorage.getItem('newsletter_popup_closed')) {
            // Show popup after 5 seconds
            setTimeout(function() {
                $('#newsletter-popup').fadeIn();
                $('body').addClass('modal-open');
            }, 5000);
        }
        
        // Close popup
        $('.newsletter-popup-close').on('click', function() {
            $('#newsletter-popup').fadeOut();
            $('body').removeClass('modal-open');
            
            // If user checks "Don't show again", save to localStorage
            if ($('#dont-show-again').is(':checked')) {
                localStorage.setItem('newsletter_popup_closed', 'true');
            }
        });
    }
    
    // Countdown Timer
    function countdownTimer() {
        // This is a placeholder for countdown timer functionality
        console.log('Countdown timer initialized');
        
        // Example implementation
        // $('.countdown').each(function() {
        //     var $this = $(this);
        //     var endDate = $this.data('end-date');
        //     
        //     var countdownInterval = setInterval(function() {
        //         var now = new Date().getTime();
        //         var distance = new Date(endDate) - now;
        //         
        //         if (distance < 0) {
        //             clearInterval(countdownInterval);
        //             $this.html('Expired');
        //             return;
        //         }
        //         
        //         var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        //         var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        //         var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        //         var seconds = Math.floor((distance % (1000 * 60)) / 1000);
        //         
        //         $this.find('.days').text(days);
        //         $this.find('.hours').text(hours);
        //         $this.find('.minutes').text(minutes);
        //         $this.find('.seconds').text(seconds);
        //     }, 1000);
        // });
    }
    
    // Virtual Vet Q&A Booking Form
    function vetBookingForm() {
        $('#vet-booking-form').on('submit', function(e) {
            e.preventDefault();
            
            // Get form values
            var petName = $('#pet-name').val();
            var petType = $('#pet-type').val();
            var ownerName = $('#owner-name').val();
            var ownerEmail = $('#owner-email').val();
            var bookingDate = $('#booking-date').val();
            var bookingTime = $('#booking-time').val();
            var question = $('#question').val();
            
            // Validate form
            if (!petName || !petType || !ownerName || !ownerEmail || !bookingDate || !bookingTime || !question) {
                alert('Please fill in all required fields');
                return false;
            }
            
            // In a real implementation, you would send this data to a server
            // For demo purposes, we'll just show a success message
            $('#vet-booking-form').hide();
            $('#booking-success').show();
            
            // Reset form
            this.reset();
            
            // Hide success message after 5 seconds and show form again
            setTimeout(function() {
                $('#booking-success').hide();
                $('#vet-booking-form').show();
            }, 5000);
        });
        
        // Initialize date picker (placeholder for a real date picker)
        // In a real implementation, you would use a library like flatpickr or jQuery UI datepicker
        console.log('Date picker initialized');
    }
    
    // Pet Photo Upload
    function petPhotoUpload() {
        // Preview uploaded image
        $('#pet-photo').on('change', function() {
            var file = this.files[0];
            if (file) {
                var reader = new FileReader();
                reader.onload = function(e) {
                    $('#photo-preview').attr('src', e.target.result).show();
                    $('.preview-container').show();
                }
                reader.readAsDataURL(file);
            }
        });
        
        // Handle form submission
        $('#photo-upload-form').on('submit', function(e) {
            e.preventDefault();
            
            // Get form values
            var petName = $('#upload-pet-name').val();
            var productUsed = $('#product-used').val();
            var description = $('#photo-description').val();
            
            // Validate form
            if (!$('#pet-photo').val() || !petName || !productUsed) {
                alert('Please fill in all required fields and upload a photo');
                return false;
            }
            
            // In a real implementation, you would upload the photo to a server
            // For demo purposes, we'll just show a success message
            $('#photo-upload-form').hide();
            $('#upload-success').show();
            
            // Reset form and preview
            this.reset();
            $('#photo-preview').attr('src', '').hide();
            $('.preview-container').hide();
            
            // Hide success message after 5 seconds and show form again
            setTimeout(function() {
                $('#upload-success').hide();
                $('#photo-upload-form').show();
            }, 5000);
        });
    }
    
    // Social Sharing
    function socialSharing() {
        // Handle social sharing button clicks
        $('.social-button').on('click', function(e) {
            var url = $(this).attr('href');
            
            // If it's not an email link, open in a popup window
            if (!url.startsWith('mailto:')) {
                e.preventDefault();
                window.open(url, 'share', 'width=600,height=400,resizable=yes,scrollbars=yes,status=yes');
            }
        });
    }
    
    // Checkout Process
    function checkoutProcess() {
        if (!$('.checkout-section').length) return;
        
        // Step Navigation
        $('.next-step').on('click', function() {
            var targetStep = $(this).data('step');
            var currentStep = $('.checkout-form-step.active');
            var currentStepIndex = $('.checkout-form-step').index(currentStep);
            var targetStepIndex = $('.checkout-form-step').index($('#' + targetStep));
            
            // Form validation (simplified for demo)
            if (currentStep.attr('id') === 'shipping-step') {
                var requiredFields = currentStep.find('[required]');
                var valid = true;
                
                requiredFields.each(function() {
                    if (!$(this).val()) {
                        $(this).addClass('error');
                        valid = false;
                    } else {
                        $(this).removeClass('error');
                    }
                });
                
                if (!valid) {
                    // Show error message
                    if (!currentStep.find('.form-error').length) {
                        currentStep.find('.form-actions').before('<div class="form-error">Please fill in all required fields.</div>');
                    }
                    return;
                } else {
                    currentStep.find('.form-error').remove();
                }
                
                // Update review section with shipping info
                var firstName = $('#first-name').val();
                var lastName = $('#last-name').val();
                var address = $('#address').val();
                var address2 = $('#address2').val() ? $('#address2').val() + '<br>' : '';
                var city = $('#city').val();
                var state = $('#state').val();
                var zip = $('#zip').val();
                var country = $('#country').val();
                var email = $('#email').val();
                var phone = $('#phone').val();
                
                var shippingHtml = '<p><strong>' + firstName + ' ' + lastName + '</strong></p>' +
                                  '<p>' + address + '</p>' +
                                  (address2 ? '<p>' + address2 + '</p>' : '') +
                                  '<p>' + city + ', ' + state + ' ' + zip + '</p>' +
                                  '<p>' + country + '</p>' +
                                  '<p>Email: ' + email + '</p>' +
                                  '<p>Phone: ' + phone + '</p>';
                
                $('#review-shipping-info').html(shippingHtml);
            }
            
            if (currentStep.attr('id') === 'payment-step') {
                var paymentMethod = $('input[name="payment-method"]:checked').val();
                var paymentIcon = '';
                var paymentText = '';
                
                if (paymentMethod === 'credit-card') {
                    paymentIcon = '<i class="far fa-credit-card"></i>';
                    paymentText = 'Credit Card ending in ' + $('#card-number').val().slice(-4);
                } else if (paymentMethod === 'paypal') {
                    paymentIcon = '<i class="fab fa-paypal"></i>';
                    paymentText = 'PayPal';
                } else if (paymentMethod === 'apple-pay') {
                    paymentIcon = '<i class="fab fa-apple-pay"></i>';
                    paymentText = 'Apple Pay';
                }
                
                $('#review-payment-info').html('<p>' + paymentIcon + ' ' + paymentText + '</p>');
            }
            
            // Update steps
            currentStep.removeClass('active');
            $('#' + targetStep).addClass('active');
            
            // Update step indicators
            $('.checkout-steps .step').eq(currentStepIndex).removeClass('active');
            $('.checkout-steps .step').eq(targetStepIndex).addClass('active');
            
            // Scroll to top of form
            $('html, body').animate({
                scrollTop: $('.checkout-section').offset().top - 100
            }, 500);
        });
        
        // Previous Step
        $('.prev-step').on('click', function() {
            var targetStep = $(this).data('step');
            var currentStep = $('.checkout-form-step.active');
            var currentStepIndex = $('.checkout-form-step').index(currentStep);
            var targetStepIndex = $('.checkout-form-step').index($('#' + targetStep));
            
            // Update steps
            currentStep.removeClass('active');
            $('#' + targetStep).addClass('active');
            
            // Update step indicators
            $('.checkout-steps .step').eq(currentStepIndex).removeClass('active');
            $('.checkout-steps .step').eq(targetStepIndex).addClass('active');
            
            // Scroll to top of form
            $('html, body').animate({
                scrollTop: $('.checkout-section').offset().top - 100
            }, 500);
        });
        
        // Edit Step
        $('.btn-edit').on('click', function() {
            var targetStep = $(this).data('step');
            var currentStep = $('.checkout-form-step.active');
            var currentStepIndex = $('.checkout-form-step').index(currentStep);
            var targetStepIndex = $('.checkout-form-step').index($('#' + targetStep));
            
            // Update steps
            currentStep.removeClass('active');
            $('#' + targetStep).addClass('active');
            
            // Update step indicators
            $('.checkout-steps .step').eq(currentStepIndex).removeClass('active');
            $('.checkout-steps .step').eq(targetStepIndex).addClass('active');
            
            // Scroll to top of form
            $('html, body').animate({
                scrollTop: $('.checkout-section').offset().top - 100
            }, 500);
        });
        
        // Place Order Button
        $('#place-order-btn').on('click', function() {
            var termsCheckbox = $('#terms');
            
            if (!termsCheckbox.prop('checked')) {
                alert('Please agree to the Terms and Conditions to complete your order.');
                return;
            }
            
            // Show loading state
            $(this).html('<i class="fas fa-spinner fa-spin"></i> Processing...');
            $(this).prop('disabled', true);
            
            // Simulate order processing
            setTimeout(() => {
                // Hide all steps and show confirmation
                $('.checkout-form-step').removeClass('active');
                $('#confirmation-step').addClass('active');
                
                // Hide step indicators
                $('.checkout-steps').hide();
                
                // Reset button
                $(this).html('Place Order');
                $(this).prop('disabled', false);
                
                // Scroll to top of form
                $('html, body').animate({
                    scrollTop: $('.checkout-section').offset().top - 100
                }, 500);
            }, 2000);
        });
        
        // Payment Method Toggle
        $('input[name="payment-method"]').on('change', function() {
            if ($(this).val() === 'credit-card') {
                $('#credit-card-form').slideDown();
            } else {
                $('#credit-card-form').slideUp();
            }
        });
        
        // Apply Coupon
        $('#apply-coupon').on('click', function() {
            var couponCode = $('#coupon-code').val().trim();
            
            if (!couponCode) {
                alert('Please enter a coupon code.');
                return;
            }
            
            // Show loading state
            $(this).html('<i class="fas fa-spinner fa-spin"></i>');
            $(this).prop('disabled', true);
            
            // Simulate coupon application
            setTimeout(() => {
                if (couponCode.toUpperCase() === 'PAWFECT10') {
                    // Check if discount already applied
                    if ($('.total-row.discount').length === 0) {
                        // Add discount row
                        var discountRow = $('<div class="total-row discount"><span>Discount (PAWFECT10)</span><span>-$5.50</span></div>');
                        discountRow.insertBefore($('.grand-total'));
                        
                        // Update grand total
                        $('.grand-total span:last-child').text('$60.42');
                        
                        // Success message
                        alert('Coupon applied successfully!');
                    } else {
                        alert('Coupon already applied.');
                    }
                } else {
                    alert('Invalid coupon code. Please try again.');
                }
                
                // Reset button
                $(this).html('Apply');
                $(this).prop('disabled', false);
            }, 1000);
        });
        
        // Form field validation
        $('input, select').on('change', function() {
            if ($(this).attr('required') && !$(this).val()) {
                $(this).addClass('error');
            } else {
                $(this).removeClass('error');
            }
        });
        
        // Format credit card number with spaces
        $('#card-number').on('input', function() {
            var value = $(this).val().replace(/\s+/g, '').replace(/[^0-9]/gi, '');
            var formatted = '';
            
            for (var i = 0; i < value.length; i++) {
                if (i > 0 && i % 4 === 0) {
                    formatted += ' ';
                }
                formatted += value[i];
            }
            
            $(this).val(formatted);
        });
        
        // Format expiry date
        $('#expiry-date').on('input', function() {
            var value = $(this).val().replace(/\s+/g, '').replace(/[^0-9]/gi, '');
            var formatted = '';
            
            if (value.length > 2) {
                formatted = value.substring(0, 2) + '/' + value.substring(2, 4);
            } else {
                formatted = value;
            }
            
            $(this).val(formatted);
        });
    }

    // Cart Functionality
    function cartFunctionality() {
        // Quantity Buttons
        $('.quantity-btn.minus').on('click', function() {
            var input = $(this).next('input');
            var value = parseInt(input.val());
            if (value > 1) {
                value--;
                input.val(value);
                updateSubtotal($(this));
            }
        });
        
        $('.quantity-btn.plus').on('click', function() {
            var input = $(this).prev('input');
            var value = parseInt(input.val());
            var max = parseInt(input.attr('max'));
            if (value < max) {
                value++;
                input.val(value);
                updateSubtotal($(this));
            }
        });
        
        // Update subtotal when quantity changes
        function updateSubtotal(button) {
            var cartItem = button.closest('.cart-item');
            var price = parseFloat(cartItem.find('.price').text().replace('$', ''));
            var quantity = parseInt(cartItem.find('input[type="number"]').val());
            var subtotal = price * quantity;
            cartItem.find('.subtotal').text('$' + subtotal.toFixed(2));
            
            updateCartTotals();
        }
        
        // Update cart totals
        function updateCartTotals() {
            var subtotal = 0;
            $('.subtotal').each(function() {
                subtotal += parseFloat($(this).text().replace('$', ''));
            });
            
            // Update subtotal in summary
            $('.summary-row:first-child span:last-child').text('$' + subtotal.toFixed(2));
            
            // Check if free shipping is available
            var freeShippingOption = $('#free-shipping');
            if (subtotal >= 50) {
                freeShippingOption.prop('disabled', false);
                freeShippingOption.prop('checked', true);
            } else {
                freeShippingOption.prop('disabled', true);
                if (freeShippingOption.prop('checked')) {
                    $('#standard-shipping').prop('checked', true);
                }
            }
            
            // Calculate shipping cost
            var shippingCost = 0;
            var selectedShipping = $('input[name="shipping"]:checked').val();
            
            if (selectedShipping === 'standard') {
                shippingCost = 5.99;
            } else if (selectedShipping === 'express') {
                shippingCost = 12.99;
            }
            
            // Calculate tax (9% for example)
            var tax = subtotal * 0.09;
            $('.summary-row:nth-child(3) span:last-child').text('$' + tax.toFixed(2));
            
            // Calculate total
            var total = subtotal + shippingCost + tax;
            $('.summary-row.total span:last-child').text('$' + total.toFixed(2));
        }
        
        // Remove item
        $('.remove-item').on('click', function() {
            var cartItem = $(this).closest('.cart-item');
            
            // Add fade-out animation
            cartItem.css('opacity', '0');
            cartItem.css('height', cartItem.outerHeight() + 'px');
            
            setTimeout(function() {
                cartItem.css('height', '0');
                cartItem.css('padding', '0');
                cartItem.css('margin', '0');
                cartItem.css('border', 'none');
                
                setTimeout(function() {
                    cartItem.remove();
                    updateCartTotals();
                    
                    // If no items left, show empty cart message
                    if ($('.cart-item').length === 0) {
                        var emptyCartMessage = $('<div class="empty-cart"></div>');
                        emptyCartMessage.html(`
                            <div class="empty-cart-icon">
                                <i class="fas fa-shopping-cart"></i>
                            </div>
                            <h3>Your cart is empty</h3>
                            <p>Looks like you haven't added any items to your cart yet.</p>
                            <a href="../shop/shop.html" class="btn btn-primary">Start Shopping</a>
                        `);
                        
                        $('.cart-items').html('').append(emptyCartMessage);
                        $('.cart-summary').hide();
                    }
                }, 300);
            }, 300);
        });
        
        // Update cart button
        $('#update-cart-btn').on('click', function() {
            // Show loading state
            $(this).html('<i class="fas fa-spinner fa-spin"></i> Updating...');
            $(this).prop('disabled', true);
            
            // Simulate update
            setTimeout(function() {
                updateCartTotals();
                
                // Reset button
                $('#update-cart-btn').html('Update Cart');
                $('#update-cart-btn').prop('disabled', false);
                
                // Show success message
                var successMessage = $('<div class="cart-message success"></div>');
                successMessage.html('<i class="fas fa-check-circle"></i> Cart updated successfully');
                
                $('.cart-actions').append(successMessage);
                
                // Remove message after 3 seconds
                setTimeout(function() {
                    successMessage.css('opacity', '0');
                    setTimeout(function() {
                        successMessage.remove();
                    }, 300);
                }, 3000);
            }, 1000);
        });
        
        // Apply coupon
        $('#cart-apply-coupon').on('click', function() {
            var couponCode = $('#cart-coupon-code').val().trim();
            
            if (!couponCode) {
                alert('Please enter a coupon code.');
                return;
            }
            
            // Show loading state
            $(this).html('<i class="fas fa-spinner fa-spin"></i>');
            $(this).prop('disabled', true);
            
            // Simulate coupon application
            setTimeout(function() {
                if (couponCode.toUpperCase() === 'PAWFECT10') {
                    // Success message
                    var successMessage = $('<div class="cart-message success"></div>');
                    successMessage.html('<i class="fas fa-check-circle"></i> Coupon applied successfully! 10% discount will be applied at checkout.');
                    
                    $('.cart-actions').append(successMessage);
                    
                    // Remove message after 5 seconds
                    setTimeout(function() {
                        successMessage.css('opacity', '0');
                        setTimeout(function() {
                            successMessage.remove();
                        }, 300);
                    }, 5000);
                } else {
                    // Error message
                    var errorMessage = $('<div class="cart-message error"></div>');
                    errorMessage.html('<i class="fas fa-times-circle"></i> Invalid coupon code. Please try again.');
                    
                    $('.cart-actions').append(errorMessage);
                    
                    // Remove message after 5 seconds
                    setTimeout(function() {
                        errorMessage.css('opacity', '0');
                        setTimeout(function() {
                            errorMessage.remove();
                        }, 300);
                    }, 5000);
                }
                
                // Reset button
                $('#cart-apply-coupon').html('Apply Coupon');
                $('#cart-apply-coupon').prop('disabled', false);
            }, 1000);
        });
        
        // Shipping option change
        $('input[name="shipping"]').on('change', function() {
            updateCartTotals();
        });
        
        // Initialize totals
        updateCartTotals();
    }

})(jQuery);