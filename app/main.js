define([
    'jquery',
    'modules/palindromes'
  ],
  function ($, palindromes) {
    'use strict';

    var cache = {},
      currentView;

    function loadView(view, container, callback) {
      if (cache[view] === undefined) {
        cache[view] = $('#templates>*[name=' + view + ']').clone();
      }

      cache[view].appendTo(container);
      if ($.isFunction(callback)) {
        callback(cache[view]);
      }
    }

    function clearView(view) {
      if (cache[view] !== undefined) {
        cache[view] = undefined;
      }
    }

    function route(hash) {
      var view;
      hash = hash || '#home';
      view = hash.substring(1);

      $('.nav>.active').removeClass('active');
      $('.nav>li>a[href=' + hash + ']').parent().addClass('active');

      if (currentView) {
        currentView.remove();
      }

      loadView(view, '#content', function (view) {
        currentView = view;
      });
    }

    function showPalindromes(result, view) {
      var i = 0,
        len = result.length,
        palindrome,
        item = view.find('.list-group');

      if (len === 0) {
        item.find('.list-group-item-heading').text('Not Found');
        return;
      }

      for (; i < len; i += 1) {
        palindrome = result[i];
        if (i > 0) {
          item = item.clone();
        }
        item.find('.list-group-item-heading').text(palindrome.text);
        item.find('.list-group-item-text').text('Index: ' + palindrome.index + ', Length: ' + palindrome.length);
        item.appendTo(view);
      }
    }

    function calculatePalindromes() {

      var baseString = $.trim($('#content *[name=baseString]').val()),
        count = $.trim($('#content *[name=count]').val()),
        result,
        container = $('#content .result');

      if (container.length) {

        container.html('');

        count = !count || isNaN(count = parseInt(count, 10)) ? 1 : count;

        if (baseString) {

          result = palindromes(baseString, count);
          clearView('palindromes');
          loadView('palindromes', container, function (view) {
            showPalindromes(result, view);
          });
        }
      }

    }

    $('.nav').on('click', 'li>a', function () {
      route($(this).attr('href'));
    });

    $('#content').on('click', '.btn-calculate', function () {
      calculatePalindromes();
    });

    route(location.hash);

  });