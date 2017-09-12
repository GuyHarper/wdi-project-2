
function useGuestAccess(req, res, next) {
  if(req.session.listId) {
    res.locals.listId = req.session.listId;
  }
  next();
}

module.exports = useGuestAccess;
