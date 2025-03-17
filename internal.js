exports.handlers = {
    newDoclet: function ({doclet, ...e}) {
        if(doclet && doclet.tags?.some(tag => tag.title?.toLowerCase() === 'internal')) {
            doclet.access = 'package';
        }
    }
}
