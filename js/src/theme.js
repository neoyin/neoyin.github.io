(function () {
  "use strict";

  var Theme = {};

  Theme.backToTop = {
    register: function () {
      var $backToTop = $('#back-to-top');

      $(window).scroll(function () {
        if($(window).scrollTop() > 100) {
          $backToTop.fadeIn(1000);
        } else {
          $backToTop.fadeOut(1000);
        }
      });

      $backToTop.click(function () {
        $('body,html').animate({ scrollTop: 0 });
      });
    }
  };

  Theme.fancybox = {
    register: function () {
      if ($.fancybox){
        $('.post').each(function () {
          $(this).find('img').each(function () {
            $(this).wrap('<a class="fancybox" href="' + this.src + '" title="' + this.alt + '"></a>')
          });
        });

        $('.fancybox').fancybox({
          openEffect	: 'elastic',
          closeEffect	: 'elastic'
        });
      }
    }
  };

  Theme.codeCopy = {
    register: function () {
      $('.highlight').each(function () {
        var $highlight = $(this);
        var $copyBtn = $('<div class="copy-btn">Copy</div>');
        
        $highlight.append($copyBtn);
        
        $copyBtn.click(function () {
          var code = $highlight.find('.code pre').text();
          var tempElement = $('<textarea></textarea>');
          tempElement.val(code).appendTo('body').select();
          
          try {
            document.execCommand('copy');
            $copyBtn.text('Copied!');
            $copyBtn.css('background', '#4CAF50');
            
            setTimeout(function () {
              $copyBtn.text('Copy');
              $copyBtn.css('background', '');
            }, 2000);
          } catch (err) {
            console.error('Failed to copy code: ', err);
            $copyBtn.text('Error');
            $copyBtn.css('background', '#f44336');
            
            setTimeout(function () {
              $copyBtn.text('Copy');
              $copyBtn.css('background', '');
            }, 2000);
          } finally {
            tempElement.remove();
          }
        });
      });
    }
  };

  this.Theme = Theme;
}.call(this));
