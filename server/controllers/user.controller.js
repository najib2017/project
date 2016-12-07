import User from '../models/user';
import cuid from 'cuid';
import slug from 'limax';
import sanitizeHtml from 'sanitize-html';

/**
 * Get all posts
 * @param req
 * @param res
 * @returns void
 */
// export function getPosts(req, res) {
//   Post.find().sort('-dateAdded').exec((err, posts) => {
//     if (err) {
//       res.status(500).send(err);
//     }
//     res.json({ posts });
//   });
// }

/**
 * Save a post
 * @param req
 * @param res
 * @returns void
 */
export function addUser(req, res) {
  if (!req.body.user.firstname || !req.body.user.lastname || 
    !req.body.user.password || !req.body.user.email || !req.body.user.number) {
    res.status(403).end();
  }

  const newUser = new User(req.body.user);

  // Let's sanitize inputs
  newUser.firstname = sanitizeHtml(newUser.firstname);
  newUser.lastname = sanitizeHtml(newUser.lastname);
  newUser.password = sanitizeHtml(newUser.password);
  newUser.email = sanitizeHtml(newUser.email);
  newUser.number = sanitizeHtml(newUser.number);

  //newUser.slug = slug(newUser.title.toLowerCase(), { lowercase: true });
  //newUser.cuid = cuid();
  newUser.save((err, saved) => {
    if (err) {
      res.status(500).send(err);
    }
    res.json({ user: saved });
  });
}
