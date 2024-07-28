const Listing=require("../models/listing")
const{listingSchema}= require("../schema")

module.exports.index=async(req,res)=>{
    const allListings = await Listing.find({});
    res.render("listings/index.ejs", { allListings });
 }

 module.exports.renderNewForm=(req,res)=>{
    res.render("listings/new.ejs");
}

module.exports.showListing=async(req,res)=>{
    let {id} = req.params;
    console.log(`ID is ${req.params.id}`);
    const listing = await Listing.findById(id).populate({path:"reviews",populate:{path:"author"},}).populate("owner");
    if(!listing){
       req.flash("error","Recipe you reqested for  does not exist")
       res.redirect("/listings")
    }
    listing.stepsArray = listing.steps.split('\n').filter(step => step.trim() !== "");

    res.render("listings/show.ejs",{listing});
}


module.exports.createListing = async (req, res, next) => {
  
    try {
        let url = req.file.path;
        let filename = req.file.filename;

        // Check if req.body.listing exists
        if (!req.body.listing) {
            return res.status(400).send("Error 400: 'listing' is required");
        }

        const newListing = new Listing(req.body.listing);
        newListing.owner = req.user._id;
        newListing.image = { url, filename };
                 
        let savedListing= await newListing.save();
        console.log(savedListing);
        req.flash("success", "New Recipe created!");
        res.redirect("/listings");
    } catch (error) {
        next(error);
    }
};


module.exports.renderEditForm= async(req,res)=>{
    let {id} = req.params;
    const listing = await Listing.findById(id);
    if(!listing){
        req.flash("error","Recipe you reqested for  does not exist")
        res.redirect("/listings")
     }
     let originalImageUrl = listing.image.url;
     originalImageUrl=originalImageUrl.replace("/upload","/upload/w_250");
    res.render("listings/edit.ejs",{listing,originalImageUrl});
}

module.exports.updateListing = async (req, res, next) => {
    try {
        const { id } = req.params;
        const updateData = { ...req.body.listing };

        // Fetch existing listing
        const existingListing = await Listing.findById(id);

        if (!existingListing) {
            return next(new ExpressError('Listing not found', 404));
        }

        // Preserve the existing image if no new image is uploaded
        if (req.file) {
            const { path: url, filename } = req.file;
            updateData.image = { url, filename };
        } else {
            // If no new image, keep the existing image
            updateData.image = existingListing.image;
        }

        // Update the listing with the new data
        const updatedListing = await Listing.findByIdAndUpdate(id, updateData, { new: true });

        req.flash("success", "Recipe Updated!");
        res.redirect(`/listings/${id}`);
    } catch (err) {
        console.error('Error:', err);
        next(err);
    }
};

module.exports.destroyListing =async(req,res)=>{
    let {id} = req.params;
    let deleteListing = await Listing.findByIdAndDelete(id,{...req.body.listing});
    console.log(deleteListing);
    req.flash("success","Recipe Deleted!");

    res.redirect("/listings")
}


module.exports.searchListings = async (req, res, next) => {
    try {
        const query = req.query.q; // Search query
        const category = req.query.category; // Category filter

        let searchQuery = {};
        if (query) {
            searchQuery['$text'] = { $search: query };
        }
        if (category) {
            searchQuery['categories'] = category;
        }

        const results = await Listing.find(searchQuery).exec();
        res.render('listings/search.ejs', { results, query, category });
    } catch (e) {
        next(e);
    }
};
module.exports.filterByCategory = async (req, res, next) => {
    try {
        const { category } = req.params; // Get the category from URL params
        const filteredListings = await Listing.find({ categories: category });
        res.render("listings/index.ejs", { allListings: filteredListings });
    } catch (error) {
        next(error);
    }
};