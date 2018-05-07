/**
 * @Author zlx
 * @Date 2018/4/23 下午5:23
 */
!(function ($) {
    $.fn.cube = function() {
        var rectIndex,
        container = $(this),
        close = $(' <div class="close"><span id="closeBtn">x</span></div>'),
        cube = $('<div class="cube"></div>');

        for (var i = 1; i <= 6; i++) {
            var rect = $('<div data-animate="cube'+i+'" data-index="'+i+'">' + i + '</div>').addClass('rect').addClass('cube' + i + 'side');
            cube.append(rect);
        }
        container.addClass('hidden').append(close).append(cube);

        // eventListener
        $('.rect').click(function(e) {
            e.stopPropagation();
            var cla = $(this).attr('data-animate');
            rectIndex = $(this).attr('data-index');
            cube.removeClass().addClass('cube').addClass('cube_no_animate').addClass(cla);
        });

        $(document).click(function() {
            var classes = cube.attr('class').split(' ');
            var index = rectIndex;
            if (classes.length !== 1) {
                cube.removeClass().addClass('cube').addClass('cube_no_animate').addClass('cubebox'+ index)
            }
        });
        // methods
        this.open = function(t) {
            var self = this;
            this.currentClicked = t;
            $(t).hide(300, this.toggleVisit(t, function() {
                $(self).removeClass('hidden');
            }));
        };
        this.toggleVisit = function(t, fn) {
            $(t).toggle(300, fn);
        };
        this.close = function() {
            $(this).addClass('hidden');
            this.toggleVisit(this.currentClicked)
        };
        return this;
    };
})(jQuery);

