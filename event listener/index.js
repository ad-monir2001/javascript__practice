const btnEl = document.getElementById('btn');
const comment = document.getElementById('commentContainer');

btnEl.addEventListener('click', commentDone);
comment.addEventListener('click',deleted)

function commentDone() {
  const commentEl = document.getElementById('comment');
  const newComment = commentEl.value;
  const p = document.createElement('p');
  p.innerText = newComment;
  comment.appendChild(p);
  commentEl.value = ''
}

function deleted(e) {
  e.target.remove();
}
