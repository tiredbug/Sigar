var routes = [
  // Index page
  {
    path: '/',
    url: './index.html',
    name: 'home',
  },
  {
    path: '/profile/',
    url: './pages/profile.html',
    name: 'profile',
  },
  {
    path: '/pemberitahuan/',
    url: './pages/pemberitahuan.html',
    name: 'pemberitahuan',
  },
  {
    path: '/login/',
    url: './pages/login.html',
  },
  {
    path: '/register/',
    url: './pages/register.html',
  },
  {
      path: '/forgot-password/',
      url: './pages/forgot-password.html',
  },
  {
      path: '/walkthrough/',
      url: './pages/walkthrough.html',
  },
  // About page
  {
    path: '/about/',
    url: './pages/about.html',
    name: 'about',
  },
  // Settings
  {
    path: '/settings/',
    componentUrl: './pages/settings.html',
  },
  // Homepage
  {
    path: '/homepage/',
    url: './pages-ori/homepage.html',
    name: 'homepage',
  },

  // Components
  {
    path: '/accordion/',
    url: './pages-ori/accordion.html',
  },
  {
    path: '/action-sheet/',
    componentUrl: './pages-ori/action-sheet.html',
  },
  {
    path: '/autocomplete/',
    componentUrl: './pages-ori/autocomplete.html',
  },
  {
    path: '/badge/',
    componentUrl: './pages-ori/badge.html',
  },
  {
    path: '/buttons/',
    url: './pages-ori/buttons.html',
  },
  {
    path: '/calendar/',
    componentUrl: './pages-ori/calendar.html',
  },
  {
    path: '/calendar-page/',
    componentUrl: './pages-ori/calendar-page.html',
  },
  {
    path: '/cards/',
    url: './pages-ori/cards.html',
  },
  {
    path: '/cards-expandable/',
    url: './pages-ori/cards-expandable.html',
  },
  {
    path: '/checkbox/',
    url: './pages-ori/checkbox.html',
  },
  {
    path: '/chips/',
    componentUrl: './pages-ori/chips.html',
  },
  {
    path: '/contacts-list/',
    url: './pages-ori/contacts-list.html',
  },
  {
    path: '/content-block/',
    url: './pages-ori/content-block.html',
  },
  {
    path: '/data-table/',
    componentUrl: './pages-ori/data-table.html',
  },
  {
    path: '/dialog/',
    componentUrl: './pages-ori/dialog.html',
  },
  {
    path: '/elevation/',
    url: './pages-ori/elevation.html',
  },
  {
    path: '/fab/',
    url: './pages-ori/fab.html',
  },
  {
    path: '/fab-morph/',
    url: './pages-ori/fab-morph.html',
  },
  {
    path: '/form-storage/',
    url: './pages-ori/form-storage.html',
  },
  {
    path: '/gauge/',
    componentUrl: './pages-ori/gauge.html',
  },
  {
    path: '/grid/',
    url: './pages-ori/grid.html',
  },
  {
    path: '/icons/',
    componentUrl: './pages-ori/icons.html',
  },
  {
    path: '/infinite-scroll/',
    componentUrl: './pages-ori/infinite-scroll.html',
  },
  {
    path: '/inputs/',
    url: './pages-ori/inputs.html',
  },
  {
    path: '/lazy-load/',
    url: './pages-ori/lazy-load.html',
  },
  {
    path: '/list/',
    url: './pages-ori/list.html',
  },
  {
    path: '/list-index/',
    componentUrl: './pages-ori/list-index.html',
  },
  {
    path: '/login-screen/',
    componentUrl: './pages-ori/login-screen.html',
  },
  {
    path: '/login-screen-page/',
    componentUrl: './pages-ori/login-screen-page.html',
  },
  {
    path: '/menu/',
    componentUrl: './pages-ori/menu.html',
  },
  {
    path: '/messages/',
    componentUrl: './pages-ori/messages.html',
  },
  {
    path: '/navbar/',
    url: './pages-ori/navbar.html',
  },
  {
    path: '/navbar-hide-scroll/',
    url: './pages-ori/navbar-hide-scroll.html',
  },
  {
    path: '/notifications/',
    componentUrl: './pages-ori/notifications.html',
  },
  {
    path: '/panel/',
    url: './pages-ori/panel.html',
  },
  {
    path: '/photo-browser/',
    componentUrl: './pages-ori/photo-browser.html',
  },
  {
    path: '/picker/',
    componentUrl: './pages-ori/picker.html',
  },
  {
    path: '/popup/',
    componentUrl: './pages-ori/popup.html',
  },
  {
    path: '/popover/',
    url: './pages-ori/popover.html',
  },
  {
    path: '/preloader/',
    componentUrl: './pages-ori/preloader.html',
  },
  {
    path: '/progressbar/',
    componentUrl: './pages-ori/progressbar.html',
  },
  {
    path: '/pull-to-refresh/',
    componentUrl: './pages-ori/pull-to-refresh.html',
  },
  {
    path: '/radio/',
    url: './pages-ori/radio.html',
  },
  {
    path: '/range/',
    componentUrl: './pages-ori/range.html',
  },
  {
    path: '/searchbar/',
    url: './pages-ori/searchbar.html',
  },
  {
    path: '/searchbar-expandable/',
    url: './pages-ori/searchbar-expandable.html',
  },
  {
    path: '/sheet-modal/',
    componentUrl: './pages-ori/sheet-modal.html',
  },
  {
    path: '/skeleton/',
    componentUrl: './pages-ori/skeleton.html',
  },
  {
    path: '/smart-select/',
    url: './pages-ori/smart-select.html',
  },
  {
    path: '/sortable/',
    url: './pages-ori/sortable.html',
  },
  {
    path: '/statusbar/',
    componentUrl: './pages-ori/statusbar.html',
  },
  {
    path: '/stepper/',
    componentUrl: './pages-ori/stepper.html',
  },
  {
    path: '/subnavbar/',
    url: './pages-ori/subnavbar.html',
  },
  {
    path: '/subnavbar-title/',
    url: './pages-ori/subnavbar-title.html',
  },
  {
    path: '/swiper/',
    url: './pages-ori/swiper.html',
    routes: [
      {
        path: 'swiper-horizontal/',
        url: './pages-ori/swiper-horizontal.html',
      },
      {
        path: 'swiper-vertical/',
        url: './pages-ori/swiper-vertical.html',
      },
      {
        path: 'swiper-space-between/',
        url: './pages-ori/swiper-space-between.html',
      },
      {
        path: 'swiper-multiple/',
        url: './pages-ori/swiper-multiple.html',
      },
      {
        path: 'swiper-nested/',
        url: './pages-ori/swiper-nested.html',
      },
      {
        path: 'swiper-loop/',
        url: './pages-ori/swiper-loop.html',
      },
      {
        path: 'swiper-3d-cube/',
        url: './pages-ori/swiper-3d-cube.html',
      },
      {
        path: 'swiper-3d-coverflow/',
        url: './pages-ori/swiper-3d-coverflow.html',
      },
      {
        path: 'swiper-3d-flip/',
        url: './pages-ori/swiper-3d-flip.html',
      },
      {
        path: 'swiper-fade/',
        url: './pages-ori/swiper-fade.html',
      },
      {
        path: 'swiper-scrollbar/',
        url: './pages-ori/swiper-scrollbar.html',
      },
      {
        path: 'swiper-gallery/',
        componentUrl: './pages-ori/swiper-gallery.html',
      },
      {
        path: 'swiper-custom-controls/',
        url: './pages-ori/swiper-custom-controls.html',
      },
      {
        path: 'swiper-parallax/',
        url: './pages-ori/swiper-parallax.html',
      },
      {
        path: 'swiper-lazy/',
        url: './pages-ori/swiper-lazy.html',
      },
      {
        path: 'swiper-pagination-progress/',
        url: './pages-ori/swiper-pagination-progress.html',
      },
      {
        path: 'swiper-pagination-fraction/',
        url: './pages-ori/swiper-pagination-fraction.html',
      },
      {
        path: 'swiper-zoom/',
        url: './pages-ori/swiper-zoom.html',
      },
    ],
  },
  {
    path: '/swipeout/',
    componentUrl: './pages-ori/swipeout.html',
  },
  {
    path: '/tabs/',
    url: './pages-ori/tabs.html',
  },
  {
    path: '/tabs-static/',
    url: './pages-ori/tabs-static.html',
  },
  {
    path: '/tabs-animated/',
    url: './pages-ori/tabs-animated.html',
  },
  {
    path: '/tabs-swipeable/',
    url: './pages-ori/tabs-swipeable.html',
  },
  {
    path: '/tabs-routable/',
    url: './pages-ori/tabs-routable.html',
    tabs: [
      {
        path: '/',
        id: 'tab1',
        content: ' \
        <div class="block"> \
          <p>Tab 1 content</p> \
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam enim quia molestiae facilis laudantium voluptates obcaecati officia cum, sit libero commodi. Ratione illo suscipit temporibus sequi iure ad laboriosam accusamus?</p> \
          <p>Saepe explicabo voluptas ducimus provident, doloremque quo totam molestias! Suscipit blanditiis eaque exercitationem praesentium reprehenderit, fuga accusamus possimus sed, sint facilis ratione quod, qui dignissimos voluptas! Aliquam rerum consequuntur deleniti.</p> \
          <p>Totam reprehenderit amet commodi ipsum nam provident doloremque possimus odio itaque, est animi culpa modi consequatur reiciendis corporis libero laudantium sed eveniet unde delectus a maiores nihil dolores? Natus, perferendis.</p> \
        </div> \
        ',
      },
      {
        path: '/tab2/',
        id: 'tab2',
        content: '\
        <div class="block"> \
          <p>Tab 2 content</p> \
          <p>Suscipit, facere quasi atque totam. Repudiandae facilis at optio atque, rem nam, natus ratione cum enim voluptatem suscipit veniam! Repellat, est debitis. Modi nam mollitia explicabo, unde aliquid impedit! Adipisci!</p> \
          <p>Deserunt adipisci tempora asperiores, quo, nisi ex delectus vitae consectetur iste fugiat iusto dolorem autem. Itaque, ipsa voluptas, a assumenda rem, dolorum porro accusantium, officiis veniam nostrum cum cumque impedit.</p> \
          <p>Laborum illum ipsa voluptatibus possimus nesciunt ex consequatur rem, natus ad praesentium rerum libero consectetur temporibus cupiditate atque aspernatur, eaque provident eligendi quaerat ea soluta doloremque. Iure fugit, minima facere.</p> \
        </div> \
        ',
      },
      {
        path: '/tab3/',
        id: 'tab3',
        content: '\
        <div class="block"> \
          <p>Tab 3 content</p> \
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam enim quia molestiae facilis laudantium voluptates obcaecati officia cum, sit libero commodi. Ratione illo suscipit temporibus sequi iure ad laboriosam accusamus?</p> \
          <p>Deserunt adipisci tempora asperiores, quo, nisi ex delectus vitae consectetur iste fugiat iusto dolorem autem. Itaque, ipsa voluptas, a assumenda rem, dolorum porro accusantium, officiis veniam nostrum cum cumque impedit.</p> \
          <p>Laborum illum ipsa voluptatibus possimus nesciunt ex consequatur rem, natus ad praesentium rerum libero consectetur temporibus cupiditate atque aspernatur, eaque provident eligendi quaerat ea soluta doloremque. Iure fugit, minima facere.</p> \
        </div> \
        ',
      },
    ],
  },
  {
    path: '/toast/',
    componentUrl: './pages-ori/toast.html',
  },
  {
    path: '/toggle/',
    url: './pages-ori/toggle.html',
  },
  {
    path: '/toolbar-tabbar/',
    componentUrl: './pages-ori/toolbar-tabbar.html',
    routes: [
      {
        path: 'tabbar/',
        componentUrl: './pages-ori/tabbar.html',
      },
      {
        path: 'tabbar-labels/',
        componentUrl: './pages-ori/tabbar-labels.html',
      },
      {
        path: 'tabbar-scrollable/',
        componentUrl: './pages-ori/tabbar-scrollable.html',
      },
      {
        path: 'toolbar-hide-scroll/',
        url: './pages-ori/toolbar-hide-scroll.html',
      },
    ],
  },
  {
    path: '/tooltip/',
    componentUrl: './pages-ori/tooltip.html',
  },
  {
    path: '/timeline/',
    url: './pages-ori/timeline.html',
  },
  {
    path: '/timeline-vertical/',
    url: './pages-ori/timeline-vertical.html',
  },
  {
    path: '/timeline-horizontal/',
    url: './pages-ori/timeline-horizontal.html',
  },
  {
    path: '/timeline-horizontal-calendar/',
    url: './pages-ori/timeline-horizontal-calendar.html',
  },
  {
    path: '/virtual-list/',
    componentUrl: './pages-ori/virtual-list.html',
  },
  {
    path: '/virtual-list-vdom/',
    componentUrl: './pages-ori/virtual-list-vdom.html',
  },
  {
    path: '/vi/',
    componentUrl: './pages-ori/vi.html',
  },

  // Color Themes
  {
    path: '/color-themes/',
    componentUrl: './pages-ori/color-themes.html',
  },

  // Page Loaders
  {
    path: '/page-loader-template7/:user/:userId/:posts/:postId/',
    templateUrl: './pages-ori/page-loader-template7.html',
    // additional context
    options: {
      context: {
        foo: 'bar',
      },
    },
  },
  {
    path: '/page-loader-component/:user/:userId/:posts/:postId/',
    componentUrl: './pages-ori/page-loader-component.html',
    // additional context
    options: {
      context: {
        foo: 'bar',
      },
    },
  },
  {
    path: '/master-detail/',
    url: './pages-ori/master-detail-master.html',
    master: true,
    detailRoutes: [
      {
        path: '/master-detail/:id/',
        templateUrl: './pages-ori/master-detail-detail.html',
      },
    ]
  },

  // Default route (404 page). MUST BE THE LAST
  {
    path: '(.*)',
    url: './pages/404.html',
  },
];
