const $header = $('header');
        let lastKnownScrollY = 0;
        let currentScrollY = 0;
        let ticking = false;
        const classes = {
            pinned: 'pinned',
            unpinned: 'unpinned',
            headerPinned: 'headerPinned'
        };

        const OnScroll = () => {
            currentScrollY = window.scrollY;
            RequestTick();
        };

        const RequestTick = () => {
            if (!ticking) requestAnimationFrame(Update);
        };

        const Update = () => {
            if (currentScrollY < lastKnownScrollY) PinIt();
            else if (currentScrollY > lastKnownScrollY) UnpinIt();
            lastKnownScrollY = currentScrollY;
            ticking = false;
        };

        const PinIt = () => {
            if ($header.hasClass(classes.unpinned)) {
                $header.removeClass(classes.unpinned);
                $header.addClass(classes.pinned);
            }
        };

        const UnpinIt = () => {
            if ($header.hasClass(classes.pinned) || !$header.hasClass(classes.unpinned)) {
                $header.removeClass(classes.pinned);
                $header.addClass(classes.unpinned);
            }
        };

        $(window).on('scroll', OnScroll);
