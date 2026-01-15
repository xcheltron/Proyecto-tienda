export const hasRole = (role) => {
    return (req, res, next) => {
        if (req.session.user.rol !== role) {
            return res.status(403).send('Acceso denegado');
        }
        next();
    };
};