var _0x285a8a=_0x2d30;(function(_0x293cb0,_0xc274e9){var _0x437946=_0x2d30,_0x2bec9e=_0x293cb0();while(!![]){try{var _0x9eda29=-parseInt(_0x437946(0x249))/0x1*(parseInt(_0x437946(0x242))/0x2)+parseInt(_0x437946(0x203))/0x3*(parseInt(_0x437946(0x221))/0x4)+parseInt(_0x437946(0x20a))/0x5+-parseInt(_0x437946(0x227))/0x6+-parseInt(_0x437946(0x230))/0x7*(-parseInt(_0x437946(0x247))/0x8)+parseInt(_0x437946(0x241))/0x9+parseInt(_0x437946(0x255))/0xa;if(_0x9eda29===_0xc274e9)break;else _0x2bec9e['push'](_0x2bec9e['shift']());}catch(_0xff89c9){_0x2bec9e['push'](_0x2bec9e['shift']());}}}(_0x3550,0x4f346));const PAGE_SIZE=0x14;requirejs[_0x285a8a(0x1ec)]({'paths':{'text':'../vendors/Scripts/text','durandal':'../vendors/Scripts/durandal','plugins':_0x285a8a(0x1f1),'transitions':_0x285a8a(0x1ff),'bootstrap':_0x285a8a(0x23c)},'shim':{'bootstrap':['jquery']}}),define(_0x285a8a(0x235),function(){return jQuery;}),define('knockout',ko),define(['durandal/system',_0x285a8a(0x208),_0x285a8a(0x251),'bootstrap'],function(_0x2642d3,_0x4aea9b,_0x364734){var _0x2d394e=_0x285a8a;_0x2642d3[_0x2d394e(0x23f)](!![]),_0x4aea9b['title']=_0x2d394e(0x25e),_0x4aea9b[_0x2d394e(0x1f2)]({'router':!![],'dialog':!![]}),_0x4aea9b[_0x2d394e(0x232)]()[_0x2d394e(0x21b)](function(){var _0x32557e=_0x2d394e;_0x364734[_0x32557e(0x223)](),_0x4aea9b['setRoot'](_0x32557e(0x1f4));});});const imdb_api_url='https://sg.media-imdb.com/suggests/',imdb_url='https://www.imdb.com/';var cors_api_url=_0x285a8a(0x25b);function ajaxHelper(_0x38998f,_0x4c09b7,_0x38184b){var _0x1aa97b=_0x285a8a;return $[_0x1aa97b(0x24b)]({'type':_0x4c09b7,'url':_0x38998f,'dataType':_0x1aa97b(0x240),'contentType':_0x1aa97b(0x1e9),'data':_0x38184b?JSON['stringify'](_0x38184b):null,'error':function(_0x3188b7,_0xb0f974,_0x5ab281){}});};function showLoading(){var _0x4e3a5f=_0x285a8a;console[_0x4e3a5f(0x201)](_0x4e3a5f(0x215)),$(_0x4e3a5f(0x1ed))[_0x4e3a5f(0x224)](_0x4e3a5f(0x200)),$(_0x4e3a5f(0x236))[_0x4e3a5f(0x224)]({'backdrop':'static','keyboard':![]});}function hideLoading(){var _0x584730=_0x285a8a;$(_0x584730(0x1ed))['on']('shown.bs.modal',function(_0x4daecc){var _0x45ced4=_0x584730;$(_0x45ced4(0x1ed))[_0x45ced4(0x224)](_0x45ced4(0x256));});}self[_0x285a8a(0x248)]=ko[_0x285a8a(0x237)]('');function showvideo(_0x2eb75e){var _0x2a59e2=_0x285a8a,_0x240bf8=document['getElementById'](_0x2eb75e),_0x499093=parseInt(document[_0x2a59e2(0x222)](_0x2eb75e)[_0x2a59e2(0x1f0)],0xa);_0x499093=isNaN(_0x499093)?0x0:_0x499093,_0x499093++,document['getElementById'](_0x2eb75e)['value']=_0x499093;var _0x37f8ba=document[_0x2a59e2(0x222)](_0x2eb75e);let _0x4872bf=_0x240bf8[_0x2a59e2(0x1f0)]%0x2;_0x4872bf==0x1&&(_0x37f8ba=document['getElementById'](_0x2eb75e),_0x37f8ba[_0x2a59e2(0x1ef)]=_0x2a59e2(0x21a),document[_0x2a59e2(0x222)]('videoscard')[_0x2a59e2(0x228)][_0x2a59e2(0x22c)]='none',console[_0x2a59e2(0x201)]('desable\x20btn\x20call\x20'+_0x499093));_0x499093==0x5&&(_0x37f8ba['style'][_0x2a59e2(0x22c)]='none',document[_0x2a59e2(0x222)](_0x2a59e2(0x1f3))['style']['display']=_0x2a59e2(0x259));if(_0x4872bf==0x0){_0x37f8ba[_0x2a59e2(0x1ef)]=_0x2a59e2(0x22b);let _0x365b28=splitlocation(location['href'])[_0x2a59e2(0x1f5)],_0x4b6377=splitlocation(location[_0x2a59e2(0x204)])['type'];var _0xb03983='https://api.themoviedb.org/3/'+_0x4b6377+'/'+_0x365b28+'/videos?api_key=19f84e11932abbc79e6d83f82d6d1045&language=en-US';$['ajax']({'url':_0xb03983,'success':function(_0x598b35){var _0xc4b015=_0x2a59e2;self[_0xc4b015(0x248)](_0x598b35['results']);}}),document[_0x2a59e2(0x222)](_0x2a59e2(0x1f3))['style'][_0x2a59e2(0x22c)]=_0x2a59e2(0x214);}}function cleanfav(){var _0x29bb9c=_0x285a8a;localStorage[_0x29bb9c(0x244)](),location[_0x29bb9c(0x211)](),console[_0x29bb9c(0x201)](localStorage['length']);}function splitlocation(_0x1f374a){var _0x3b035d=_0x285a8a;let _0xe9df6f=window[_0x3b035d(0x21e)][_0x3b035d(0x204)][_0x3b035d(0x257)]('/'),_0x45f737,_0x5dd7ab;if(_0xe9df6f[_0xe9df6f[_0x3b035d(0x239)]-0x1]=='tv')_0x45f737=_0xe9df6f[_0xe9df6f[_0x3b035d(0x239)]-0x2],_0x5dd7ab=_0xe9df6f[_0xe9df6f['length']-0x1];else _0xe9df6f[_0xe9df6f[_0x3b035d(0x239)]-0x1]==_0x3b035d(0x21d)?(_0x45f737=_0xe9df6f[_0xe9df6f[_0x3b035d(0x239)]-0x2],_0x5dd7ab=_0xe9df6f[_0xe9df6f[_0x3b035d(0x239)]-0x1]):(_0x45f737=_0xe9df6f[_0xe9df6f[_0x3b035d(0x239)]-0x1],_0x5dd7ab='movie');return{'tmdbid':_0x45f737,'type':_0x5dd7ab};}function myFunction(_0x42f51b,_0xf7104a,_0x2249cd,_0x26b737){var _0x570c7d=_0x285a8a;console[_0x570c7d(0x201)](_0x26b737);var _0x32a0ef=document[_0x570c7d(0x222)]('ic'+_0x42f51b);if(localStorage[_0x570c7d(0x22d)](_0xf7104a)==null)console[_0x570c7d(0x201)](_0x570c7d(0x24f)),_0x32a0ef[_0x570c7d(0x228)][_0x570c7d(0x258)]=_0x570c7d(0x254),localStorage[_0x570c7d(0x220)](_0xf7104a,_0x42f51b+'/'+_0x2249cd);else localStorage[_0x570c7d(0x22d)](_0xf7104a)!=null&&(localStorage['removeItem'](_0xf7104a),console[_0x570c7d(0x201)](_0x570c7d(0x243)),_0x32a0ef[_0x570c7d(0x228)][_0x570c7d(0x258)]=_0x570c7d(0x25d));}function showfav(){var _0x4b422a=_0x285a8a;console[_0x4b422a(0x244)]();for(var _0x42b6f2=0x0;_0x42b6f2<localStorage[_0x4b422a(0x239)];_0x42b6f2++){var _0x3b92b0=localStorage[_0x4b422a(0x22d)](localStorage[_0x4b422a(0x234)](_0x42b6f2)),_0x6c7b71=_0x3b92b0[_0x4b422a(0x257)]('/')[0x0],_0x296a0e=document[_0x4b422a(0x222)]('ic'+_0x6c7b71);_0x296a0e!=null&&(_0x296a0e[_0x4b422a(0x228)][_0x4b422a(0x258)]=_0x4b422a(0x254));}}function _0x2d30(_0x4f302a,_0x224e04){var _0x3550bf=_0x3550();return _0x2d30=function(_0x2d3013,_0x1c7db5){_0x2d3013=_0x2d3013-0x1e7;var _0x2828f6=_0x3550bf[_0x2d3013];return _0x2828f6;},_0x2d30(_0x4f302a,_0x224e04);}function remove(_0x4ecefb){var _0x41f844=_0x285a8a;localStorage[_0x41f844(0x209)](_0x4ecefb),location['reload']();}function _0x3550(){var _0x1254fd=['total_pages','target','#TitleDetails/','shiftKey','&e=','../vendors/Scripts/durandal/transitions','show','log','focus','888897fDxxvT','href','attachEvent','action','/reviews?api_key=19f84e11932abbc79e6d83f82d6d1045&language=en-US&page=1','durandal/app','removeItem','839055CPrxmU','addEventListener','blur','onresize','episodes','fullname','pad','reload','results','prototype','grid','show\x20\x20\x20','ctrlKey','src','avatar_path','algin-form','Show\x20Video','then','POST','movie','location','email','setItem','8cokyed','getElementById','useConvention','modal','number','assign','3721692NleiSa','style','includes','GET','Hide\x20Videos','display','getItem','resize','keydown','1288462ikJyUD','resultados','start','What\x27s\x20your\x20name?','key','jquery','#loadingModal','observableArray','verfilme','length','https://www.gravatar.com/avatar/','preventDefault','../vendors/Scripts/bootstrap.bundle','https://api.themoviedb.org/3/movie/popular?api_key=19f84e11932abbc79e6d83f82d6d1045&language=en-US&page=','complete','debug','json','899460MIIPNr','949562keCZWV','Removido\x20do\x20Favorito\x20','clear','readyState','block','16Nteoka','videos','1iuARls','https://formsubmit.co/80c091cdbb3b3b2aafea1fe888b46d2d','ajax','records','&s=','verfilmebtn','Adicionando\x20a\x20favorito','keyCode','durandal/viewLocator','https://api.themoviedb.org/3/','Debug\x20allowed\x20,\x20Dovas\x20press\x20de\x20key\x20z\x20to\x20allow\x20','purple','1910040NepzfS','hide','split','color','none','onfocus','https://cors-anywhere.herokuapp.com/','event','white','NETFREE','done','opacity','method','application/json','card','mousemove','config','#loadingModals','load','innerHTML','value','../vendors/Scripts/durandal/plugins','configurePlugins','videoscard','viewmodels/shell','tmdbid','write','author_details','showfilme','_blank'];_0x3550=function(){return _0x1254fd;};return _0x3550();}function favinfo(_0x1984bf){var _0x2ede6b=_0x285a8a;let _0x3bb50=document['getElementsByName'](_0x1984bf);id=localStorage[_0x2ede6b(0x22d)](_0x1984bf);var _0x4434a2=id[_0x2ede6b(0x257)]('/')[0x0],_0x4ac6c1=id[_0x2ede6b(0x257)]('/')[0x1];_0x3bb50[_0x2ede6b(0x204)]=_0x2ede6b(0x1fc)+_0x4434a2+'/'+_0x4ac6c1,window[_0x2ede6b(0x21e)]=_0x3bb50[_0x2ede6b(0x204)];}function cardhide(_0x3f763f){var _0x147312=_0x285a8a,_0x74cae5=_0x3f763f;for(var _0x22db9a in this[_0x147312(0x24c)]()){if(_0x147312(0x1ea)+this['records']()[_0x22db9a]['id']==_0x74cae5){}else{var _0xbe0fbd=document[_0x147312(0x222)](_0x147312(0x1ea)+this[_0x147312(0x24c)]()[_0x22db9a]['id']);_0xbe0fbd[_0x147312(0x228)]['opacity']='.4';}}}function verfilme(){var _0x13663c=_0x285a8a,_0x6c0ff0=document[_0x13663c(0x222)](_0x13663c(0x1f8));_0x6c0ff0[_0x13663c(0x228)]['display']=_0x13663c(0x246);}function cardshow(_0x6991d){var _0x4f9834=_0x285a8a,_0x539a01=_0x6991d;for(var _0x3d861e in this['records']()){var _0x6ae45f=document[_0x4f9834(0x222)](_0x4f9834(0x1ea)+this[_0x4f9834(0x24c)]()[_0x3d861e]['id']);_0x6ae45f[_0x4f9834(0x228)][_0x4f9834(0x1e7)]='';}}Number[_0x285a8a(0x213)][_0x285a8a(0x210)]=function(_0x171421){var _0x356aae=String(this);while(_0x356aae['length']<(_0x171421||0x2)){_0x356aae='0'+_0x356aae;}return _0x356aae;};function incrementValue(_0x5e2171){var _0x476465=_0x285a8a;let _0x42de53;var _0x1d3974=parseInt(document[_0x476465(0x222)](_0x476465(0x225))[_0x476465(0x1f0)],0xa);_0x1d3974=isNaN(_0x1d3974)?0x0:_0x1d3974,_0x1d3974++,document[_0x476465(0x222)](_0x476465(0x225))[_0x476465(0x1f0)]=_0x1d3974;let _0x3eb003;_0x5e2171=='tv'&&(_0x3eb003='https://api.themoviedb.org/3/tv/popular?api_key=19f84e11932abbc79e6d83f82d6d1045&language=en-US&page='+_0x1d3974),_0x5e2171!='tv'&&(_0x3eb003=_0x476465(0x23d)+_0x1d3974),ajaxHelper(_0x3eb003,'GET')[_0x476465(0x25f)](function(_0x509999){var _0x5ed89b=_0x476465;_0x42de53=_0x509999[_0x5ed89b(0x1fa)],hideLoading(),self[_0x5ed89b(0x24c)](_0x509999[_0x5ed89b(0x212)]);});}function makepopular(_0x452006){var _0x61ba08=_0x285a8a;ajaxHelper(_0x61ba08(0x252)+_0x452006+'/popular?api_key=19f84e11932abbc79e6d83f82d6d1045&language=en-US&page=1',_0x61ba08(0x22a))[_0x61ba08(0x25f)](function(_0x39b22a){var _0xd7df1=_0x61ba08;hideLoading(),self[_0xd7df1(0x24c)](_0x39b22a[_0xd7df1(0x212)]);});}function showserie(_0x4a10e8){var _0x309268=_0x285a8a,_0x5877de=document['getElementById'](_0x309268(0x20e))[_0x309268(0x1f0)],_0x3deba5=document[_0x309268(0x222)]('seasons')[_0x309268(0x1f0)],_0x51f410=document[_0x309268(0x222)](_0x309268(0x238));document['getElementById'](_0x309268(0x24e))[_0x309268(0x228)][_0x309268(0x22c)]=_0x309268(0x259);if(_0x5877de&&_0x3deba5){console[_0x309268(0x201)](_0x5877de+'\x20'+_0x3deba5+'\x20'+_0x4a10e8);var _0x36a133='https://www.2embed.ru/embed/tmdb/tv?id='+_0x4a10e8+_0x309268(0x24d)+_0x3deba5+_0x309268(0x1fe)+_0x5877de;_0x51f410[_0x309268(0x217)]=_0x36a133;var _0x452b53=document['getElementById'](_0x309268(0x1f8));_0x452b53[_0x309268(0x228)][_0x309268(0x22c)]='block';}}function getreviews(_0x336c0d,_0x32fca8){var _0x109cdb=_0x285a8a;showLoading();var _0x4ce0e5=_0x109cdb(0x252)+_0x32fca8+'/'+_0x336c0d+_0x109cdb(0x207);self[_0x109cdb(0x231)]=ko['observableArray'](''),$[_0x109cdb(0x24b)]({'url':_0x4ce0e5,'success':function(_0x619017){var _0x47c255=_0x109cdb;for(var _0xc396f5 in _0x619017['results']){!_0x619017[_0x47c255(0x212)][_0xc396f5][_0x47c255(0x1f7)][_0x47c255(0x218)]&&delete Object[_0x47c255(0x226)](_0x619017[_0x47c255(0x212)][_0xc396f5],{'avatar_path':_0x619017[_0x47c255(0x212)][_0xc396f5][_0x47c255(0x1f7)][_0x47c255(0x218)]})[''],_0x619017[_0x47c255(0x212)][_0xc396f5][_0x47c255(0x1f7)][_0x47c255(0x218)]&&delete Object['assign'](_0x619017['results'][_0xc396f5],{'avatar_path':_0x619017[_0x47c255(0x212)][_0xc396f5]['author_details']['avatar_path']})[''],_0x619017[_0x47c255(0x212)][_0xc396f5][_0x47c255(0x218)]!=null&&(_0x619017[_0x47c255(0x212)][_0xc396f5][_0x47c255(0x218)]=_0x619017[_0x47c255(0x212)][_0xc396f5][_0x47c255(0x218)]['substring'](0x1),!_0x619017[_0x47c255(0x212)][_0xc396f5]['avatar_path'][_0x47c255(0x229)]('https://www.gravatar.com/')&&(_0x619017['results'][_0xc396f5][_0x47c255(0x218)]=_0x47c255(0x23a)+_0x619017[_0x47c255(0x212)][_0xc396f5][_0x47c255(0x218)]));}self[_0x47c255(0x231)](_0x619017[_0x47c255(0x212)]),_0x619017['results'][_0x47c255(0x239)]==0x0&&self[_0x47c255(0x231)](null),window[_0x47c255(0x21e)]['href']=window[_0x47c255(0x21e)][_0x47c255(0x204)];}});}const validateEmail=_0x39ddf9=>{return String(_0x39ddf9)['toLowerCase']()['match'](/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);};function submiteform(){var _0x4190cc=_0x285a8a,_0x1a4a43=document[_0x4190cc(0x222)](_0x4190cc(0x20f))[_0x4190cc(0x1f0)],_0x23a025=document['getElementById'](_0x4190cc(0x21f))[_0x4190cc(0x1f0)];if(validateEmail(_0x23a025)){var _0x24f2d3=document[_0x4190cc(0x222)](_0x4190cc(0x219));_0x24f2d3[_0x4190cc(0x1fb)]=_0x4190cc(0x1f9),_0x24f2d3[_0x4190cc(0x206)]=_0x4190cc(0x24a),_0x24f2d3[_0x4190cc(0x1e8)]=_0x4190cc(0x21c);}}!(function(){var _0x364d83=_0x285a8a;const _0x2b3dc8=prompt(_0x364d83(0x233));if(_0x2b3dc8=='dovas'){alert(_0x364d83(0x253));return;}function _0x4ae0a6(_0x4cee9c){if(isNaN(+_0x4cee9c))_0x4cee9c=0x64;var _0xe27c6d=+new Date();debugger;var _0x52f828=+new Date();(isNaN(_0xe27c6d)||isNaN(_0x52f828)||_0x52f828-_0xe27c6d>_0x4cee9c)&&document['write']('');}window['attachEvent']?document[_0x364d83(0x245)]===_0x364d83(0x23e)||document['readyState']==='interactive'?(_0x4ae0a6(),window['attachEvent'](_0x364d83(0x20d),_0x4ae0a6),window[_0x364d83(0x205)]('onmousemove',_0x4ae0a6),window['attachEvent'](_0x364d83(0x25a),_0x4ae0a6),window[_0x364d83(0x205)]('onblur',_0x4ae0a6)):setTimeout(argument['callee'],0x0):(window[_0x364d83(0x20b)](_0x364d83(0x1ee),_0x4ae0a6),window['addEventListener'](_0x364d83(0x22e),_0x4ae0a6),window[_0x364d83(0x20b)](_0x364d83(0x1eb),_0x4ae0a6),window[_0x364d83(0x20b)](_0x364d83(0x202),_0x4ae0a6),window[_0x364d83(0x20b)](_0x364d83(0x20c),_0x4ae0a6));}()),document['addEventListener'](_0x285a8a(0x22f),function(){var _0x513c50=_0x285a8a;event[_0x513c50(0x250)]==0x5a&&(window[_0x513c50(0x1f0)]=0x1,console[_0x513c50(0x201)]('Dev\x20mode\x20allowed'));if(event[_0x513c50(0x250)]==0x7b){if(window[_0x513c50(0x1f0)]!=0x1){console[_0x513c50(0x244)]();for(let _0x2402e0=0x0;_0x2402e0<0x5;_0x2402e0++){document[_0x513c50(0x1f6)]('');}}return![];}else{if(event[_0x513c50(0x216)]&&event[_0x513c50(0x1fd)]&&event[_0x513c50(0x250)]==0x49){if(window[_0x513c50(0x1f0)]!=0x1){console[_0x513c50(0x244)]();for(let _0x3447ce=0x0;_0x3447ce<0x5;_0x3447ce++){document['write']('');}}return![];}else{if(event[_0x513c50(0x216)]&&event[_0x513c50(0x250)]==0x55){if(window[_0x513c50(0x1f0)]!=0x1){console[_0x513c50(0x244)]();for(let _0x32b038=0x0;_0x32b038<0x5;_0x32b038++){document[_0x513c50(0x1f6)]('');}}return![];}}}},![]);if(document[_0x285a8a(0x20b)]){document['addEventListener']('contextmenu',function(_0x2df79b){var _0xe52d2b=_0x285a8a;_0x2df79b[_0xe52d2b(0x23b)]();},![]);if(window[_0x285a8a(0x1f0)]!=0x1){console[_0x285a8a(0x244)]();for(let i=0x0;i<0x5;i++){document[_0x285a8a(0x1f6)]('');}}}else{document['attachEvent']('oncontextmenu',function(){var _0x8b2dac=_0x285a8a;window[_0x8b2dac(0x25c)]['returnValue']=![];});if(window[_0x285a8a(0x1f0)]!=0x1){console[_0x285a8a(0x244)]();for(let i=0x0;i<0x5;i++){document['write']('');}}}