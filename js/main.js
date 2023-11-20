const likedPosts = [];

const posts = [
    {
        "id": 1,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/300?image=171",
        "author": {
            "name": "Phil Mangione",
            "image": "https://unsplash.it/300/300?image=15"
        },
        "likes": 80,
        "created": "2021-06-25"
    },
    {
        "id": 2,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=112",
        "author": {
            "name": "Sofia Perlari",
            "image": "https://unsplash.it/300/300?image=10"
        },
        "likes": 120,
        "created": "2021-09-03"
    },
    {
        "id": 3,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=234",
        "author": {
            "name": "Chiara Passaro",
            "image": "https://unsplash.it/300/300?image=20"
        },
        "likes": 78,
        "created": "2021-05-15"
    },
    {
        "id": 4,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=24",
        "author": {
            "name": "Luca Formicola",
            "image": "https://unsplash.it/300/300?image=30"
        },
        "likes": 56,
        "created": "2021-04-03"
    },
    {
        "id": 5,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=534",
        "author": {
            "name": "Alessandro Sainato",
            "image": "https://unsplash.it/300/300?image=29"
        },
        "likes": 95,
        "created": "2021-03-05"
    }
];

createPosts();
clickLike();

function createPosts() {
    posts.forEach(post => {
        const initials = getInitials(post.author.name)
    let profileImage = ''
    if (post.author.image) {
      profileImage = `<img class="profile-pic" src="${post.author.image}" alt="${post.author.name}">`
    } else {
      profileImage = `<div class="profile-pic-default"><span class="profile-pic-default span">${initials}</span></div>`
    }
    let postTemplate = `
      <div class="post" id="${post.id}">
          <div class="post__header">
              <div class="post-meta">                    
                  <div class="post-meta__icon">
                      ${profileImage}
                  </div>
                  <div class="post-meta__data">
                      <div class="post-meta__author">${post.author.name}</div>
                      <div class="post-meta__time">${post.created}</div>
                  </div>                    
              </div>
          </div>
          <div class="post__text">${post.content}</div>
          <div class="post__image">
              <img src="${post.media}" alt="">
          </div>
          <div class="post__footer">
              <div class="likes js-likes">
                  <div class="likes__cta">
                      <a class="like-button  js-like-button" data-postid="${post.id}">
                          <i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>
                          <span class="like-button__label">Mi Piace</span>
                      </a>
                  </div>
                  <div class="likes__counter">
                      Piace a <b id="like-counter-${post.id}" class="js-likes-counter">${post.likes}</b> persone
                  </div>
              </div> 
          </div>            
      </div>`
    document.getElementById('container').innerHTML += postTemplate
  })
  function getInitials (name) {
    const names = name.split(' ')
    return names.map(n => n[0]).join('')
  }

}
function clickLike () {
  const likeBtn = document.getElementsByClassName('like-button')
  for (let i = 0; i < likeBtn.length; i++) {
    
    likeBtn[i].addEventListener('click', function (event) {
      event.preventDefault()
      const likesCounter = document.getElementById(`like-counter-${i + 1}`)
      const currentLikes = parseInt(likesCounter.innerText, 10)
      likeBtn[i].classList.toggle('like-button--liked')
      if (likeBtn[i].classList.contains('like-button--liked')) {
        likesCounter.innerText = currentLikes + 1
        likedposts.push(document.getElementById(i + 1))
      } else {
        likesCounter.innerText = currentLikes - 1
        likedposts.pop(document.getElementById(i + 1))
      }
    })
  }
}

