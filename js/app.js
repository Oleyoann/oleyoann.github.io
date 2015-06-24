window.yh = (function(){

    var mc,
        mc2,
        sidebar,
        list,
        s,
        isSidebarOpen = false;

    var setupGestures = function() {

        mc.get('pan').set({ direction: Hammer.DIRECTION_HORIZONTAL });

    };

    var showSidePanel = function() {

        document.body.classList.add('no-scroll');
        isSidebarOpen = true;
        sidebar.style.display = 'block';
        if (!mc2) {
            mc2 = new Hammer(sidebar);

            mc2.on("swiperight", function(ev) {

                sidebar.style.display = 'none';
                document.body.classList.remove('no-scroll');
                isSidebarOpen = false;

            });
        }


    };

    var addEventHandlers = function() {

        mc.on("swiperight", function(ev) {

            if (isSidebarOpen) {
                document.body.classList.remove('no-scroll');
                sidebar.style.display = 'none';
                isSidebarOpen = false;
            } else {
                document.location.href='create.html'
            }

        });

        mc.on("swipeleft", function(ev) {
            showSidePanel();
        });

        window.addEventListener('resize', function(){
            setCellHeight();
        }, false);
    };

    var setCellHeight = function() {

        var pageWidth = screen.width,
            cellHeight = Math.round(pageWidth / 2);

        s.innerHTML = '#list li div { height:' + cellHeight + 'px;}'

    };

    var init = function() {

        list = document.getElementById('list');
        sidebar = document.getElementById('sidebar');
        s = document.getElementById('style');

        setCellHeight();

        mc = new Hammer(list, {
            preventDefault: true
        });

        setupGestures();
        addEventHandlers();
    };

    init();

}());








