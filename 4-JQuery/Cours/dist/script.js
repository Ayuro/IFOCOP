
let innerPage = { menu: '', content: '' };
const srcFiles = ['cibler','dom','autres','effets','evenements','callbacks','utilitaires'];
let content = {};

const targetNode = document.head;
const config = { childList: true, subtree: true };

function parseCategory (theElements) {
  for (const  oneElement of theElements) {
    if(Object.keys(oneElement)[0] === 'h3') {
      innerPage.content += `<h3 class="content__title">${oneElement.h3}</h3>`
    } else {
      innerPage.content += `<div class="content__element">
        <h4 class="content__description">${oneElement.description} - <span class="content__methode">${oneElement.method}</span></h4>
        <pre><code class="language-javascript">${oneElement.code}</code></pre>
      </div>`
    }
  }
}

function insertText() {
  for (const  oneSrc of srcFiles) {
    innerPage.menu += `<li class="nav__element"><a class="nav__link" href="#${oneSrc}">${content[oneSrc].title}</a></li>`;
    innerPage.content += `<div id="${oneSrc}" class="group"><h2 class="group__title">${content[oneSrc].title}<span class="triangle" title="Masquer le contenu"></span></h2><div class="group__content">`;
    parseCategory(content[oneSrc].values);
    innerPage.content += `</div></div>`;
  }
  $('.nav__content').html(innerPage.menu);
  $('.page').append(innerPage.content);
  start();
  const srcLine = document.createElement("script");
  srcLine.src = `dist/prism.js`;
  document.body.appendChild(srcLine);
}

function handleNewScript(mutationsList, observer) {
  mutationsList.forEach((mutation) => {
    if (mutation.type === 'childList' && mutation.addedNodes.length > 0) {
      mutation.addedNodes.forEach((addedElement) => {
        if (addedElement.tagName === 'SCRIPT' && addedElement.getAttribute('src') === `data/${srcFiles[srcFiles.length - 1]}.js`) {
          setTimeout(insertText,100);
        }
      });
    }
  });
}

const observer = new MutationObserver(handleNewScript);
observer.observe(targetNode, config);
for (const oneSrc of srcFiles) {
  const srcLine = document.createElement("script");
  srcLine.src = `data/${oneSrc}.js`;
  document.head.appendChild(srcLine);
}

function start(){
  const contentMovement = 300;
  const durationMenu = 600;

  function hidecontent(etat){
    changeNav();
    $('.group__content').each(function(){
      $(this).css('display',etat);
    });
  };

  function hideFilter(duree){
    $('#filter').animate({opacity: 0}, duree, function(){
      $(this).hide();
    });
  };

  function changeNav(){
    if ($('.nav__button').css('display') === 'block') {
      const refHeader = $('header');
      const theValue = refHeader.height();
      if (parseFloat(refHeader.css('top')) == -theValue) {
        $('#filter').animate({opacity: 0.8}, durationMenu).show();
        refHeader.animate({top: 0}, durationMenu);
      } else {
        refHeader.animate({top: -theValue}, durationMenu);
        hideFilter(durationMenu);
      }
    }
  };

  $('#bouton-nav, .nav__element').click(function(){
    changeNav();
  });

  $('.triangle').on('click',function(){
    const $that = $(this);
    const $content = $that.toggleClass('hide').parent().siblings('.group__content');
    const titleText = $that.attr('title') == 'Masquer le contenu'
      ? 'Afficher le contenu'
      : 'Masquer le contenu'
    $that.attr('title',titleText);
    $content.slideToggle(contentMovement);
  });

  function changeTriangles(textAttribute) {
    textAttribute += ' le contenu';
    $('.triangle').each(function(i,lmt) {
      const $lmt = $(lmt)
      $lmt.attr('title',textAttribute);
      const action = textAttribute === 'Afficher le contenu'
        ? 'remove'
        : 'add'
        $lmt[action + 'Class']('hide');
    });
  };

  $('#hide-all').on('click',function(){
    const $that = $(this);
    if ($that.text() == 'Tout afficher') {
      $that.text('Tout masquer');
      hidecontent('block');
      changeTriangles('Masquer le contenu');
    } else {
      $that.text('Tout afficher');
      hidecontent('none');
      changeTriangles('Afficher le contenu');
    }
  });

  // changeNav();

  $(window).resize(function(){
    if ($('.nav__button').css('display')  === 'block') {
      hideFilter(100);
      if ($('header').attr('style')) {
        $('header').removeAttr('style');
      }
    } else {
      $('.header').css('top','initial')
    }
  });
};



