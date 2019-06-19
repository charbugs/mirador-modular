- taming rerenderings
- loader extension
- whats the api and where to inject the api into extensions?
- how does a package know where to find it's state slice?











We propose a major refactoring to make Mirador 3 a content agnostic but extensible IIIF viewer.

## Problem

At the moment Mirador 3 is an IIIF image viewer and the codebase is written and organized in a way to realize features around viewing images and related metadata.

IIIF manifests are not bound to a specific content type, so there may be text, audio, video as well. At the UBL we will deal with text-heavy IIIF data. While our requirements are not detailed at this point we expect that we need for example different window types to render and work with texts. This may result in different viewers and panels within a window.

Of course, Mirador can not anticipate and implement all possible use cases of an IIIF viewer. But it's possible to come up with architectural patterns that allow for a certain flexibility. This point has been mentioned in the inception deck of Mirador 3:

> The cultural, educational and research uses of Mirador seem endless, but the codebase and UI have also reached a point at which it is prohibitively difficult to extend in a sustainable and maintainable way. This effort will rebuild and re-architect Mirador to fully realize its potential. “Flexibility without forking”

Unfortunatly we don't think that Mirador currently follows the path of "flexibility without forking". This would require an application core that is independent from specific IIIF content and allows for extending the application to handle different content types.

One might argue that the plugin system allows for extending Mirador. We think that the plugin system is a good way to implement smaller features on top of the functionality of Mirador. But it becomes difficult and ugly if you try to change basic concepts of Mirador via plugins. Changing the window system to work with text, as mentioned above, is such a case.

## Proposal

To achieve flexibility without forking we propose a major refactoring to make Mirador a content agnostic but extensible IIIF viewer.

The core of Mirador should provide functionality that is common to all IIIF manifests and to work with it, such as retrieving and parsing manifests, providing a workspace and a window system. But functionality that is related to specific resource types should be handled by modules that the core does not depend on. So there may be a module to work with images (may comprise the OSD viewer and an annotation panel) and a module to work with text (may comprise a TEI viewer and additional panels).

[Image]

The image should give an idea of what the core UI of Mirador may look like. The windows are associated with a manifest each, but it's up to a specific content module to decide what component should be rendered in the main view and the companion windows. Also, each window can work with a different content type, at the same time, side by side.

That is, Mirador can have a bunch of modules for different content types. Adopters can choose to use one or more of this modules, but they are free to create their own content modules for their specific use cases.

## Pros

We think this approach has serveral benefits for development and community managment.

* Mirador increases its ability to cover a wide range of use cases for IIIF.

* While it's possible to create their own content modules, adopters may decide to use Mirador even if it doesn't cover a specific use case fully.

* If the core is well designed and provides a thorough API there is no need for frequent changes of the core.

* In turn, the modular architecture lowers the need for adopters to update Mirador frequently. That is, changes to module A doesn't care adopters who use module B and C. Only changes to the core affect all adopters.

* After all, with this modular approach the community may become more vivid as it is easier to comprehend modular code and write extensions for it.

## Cons

* This is a major refactoring that needs changes to a lot of files and the project structure

## More Details

A content module is a set of components for showing and/or interacting with specific resources from a manifest.

For example, the current Mirador features for viewing images and related data could be packaged in an module. The module defines components for the main view of the window  and for the companion windows:

[image]

There might be another module that handles manifests that deal with prose. It shows the text of a book page by page, an author biography and some linguistic statistics of the text:

[image]
