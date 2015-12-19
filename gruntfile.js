var grunt = require('grunt');
var uncss = require('uncss');
var critical = require('critical');

module.exports = function(grunt) {
	grunt.initConfig({
		uncss: {
		  dist: {
			options: {
				ignore: [
					'#fightsforyou',
					'.sticky',
					'#fightsforyou-cont',
					'#fights-h3',
					'.hidden-xs',
					'.hidden-sm',
					'.hidden-md',
					'.hidden-lg',
					'#howitworks',
					'#how-h3',
					'.animated',
					'.fadeInUp',
					'.fadeOutUp',
					'.fadeInDown',
					'#howitworks-cont',
					'#rampage-head',
					'#rampage-head-cont',
					'.collapse',
					'.collapsing',
					'.collapsed',
					'.in',
					'.navbar-collapse.collapse',
					'.navbar-collapse.collapse.in',
					'.navbar-collapse.collapsing',
					".fade",
					/\w\.in/,
					".fade",
					".collapse",
					".collapsing",
					/(#|\.)navbar(\-[a-zA-Z]+)?/,
					/(#|\.)dropdown(\-[a-zA-Z]+)?/,
					/(#|\.)(open)/,
					".modal",
					".modal.fade.in",
					".modal-dialog",
					".modal-document",
					".modal-scrollbar-measure",
					".modal-backdrop.fade",
					".modal-backdrop.in",
					".modal.fade.modal-dialog",
					".modal.in.modal-dialog",
					".modal-open",
					".in",
					".modal-backdrop",
					'.bs.carousel',
					'.slid.bs.carousel',
					'.slide.bs.carousel',
					'.fade',
					'.fade.in',
					'.collapse',
					'.collapse.in',
					'.collapsing',
					'.alert-danger',
					'.logged-in .navbar-default',
					'.carousel-inner > .next',
					'.carousel-inner > .prev',
					'.carousel-inner > .next',
					'.carousel-inner > .prev',
					'.carousel-inner > .next.left',
					'.carousel-inner > .prev.right',
					'.carousel-inner > .active.left',
					'.carousel-inner > .active.right',
					'#float-toc',
					'#float-toc a',
					'.modal-content',
					'.modal-header',
					'.modal-body',
					'.modal-dialog',
					'.modal.fade.in',
					'.modal-open',
					/(#|\.)modal(\-[a-zA-Z]+)?/,
					'.navbar-toggle.open',
					'.fade .modal-dialog',
					'.navbar-collapse.in',
					'.navbar-fixed-top',
					'.logged-in .navbar-fixed-top',
					'.navbar-collapse',
					'.navbar-collapse.in',
					'.navbar-inverse .innovations.navbar-toggle.open',
					'.single-innovation .navbar-inverse .innovations.navbar-toggle.open',
					'#innovations.collapse.in',
					'ul.page-numbers li a.prev',
					'.open',
					'.open > .dropdown-menu',
					'.open > a',
					'.alert-danger',
					'.visible-xs',
					'.noscript-warning',
					'.close',
					'.alert-dismissible',
					'.page.calendar .events .panel:hover .fa-angle-down.open',
					'.fa-angle-down.open'
				]
			},
			files: {
			  'css/tidy.css': ['index.html']
			}
		  }
		},
		critical: {
			test: {
					options: {
							inline: 'true',
							base: './',
							css: 'css/tidy.min.css',
							width: 1054,
							height: 1054,
							ignore: '@font-face'
					},
					src: 'index.html',
					dest: 'index-critical.html'
			}
		}
	});
}


grunt.loadNpmTasks('grunt-uncss');
grunt.loadNpmTasks('grunt-critical');
grunt.registerTask('default', ['uncss', 'critical']);
