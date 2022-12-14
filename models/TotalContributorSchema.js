// Contributors Schema to add contributors data into database
import mongoose, { Schema } from "mongoose";

const TotalContributorSchema = new Schema({
    orgName: String,
    repository: String,
    year: String,
    totalContributors: String,
}, {timestamps: true});

export const TotalContributor = mongoose.models.TotalContributor || mongoose.model("TotalContributor", TotalContributorSchema);
