import { TotalContributor } from "../models/TotalContributorSchema.js";
import { successResponse, failedResponse } from "../helpers/response.js"
import axios from "axios";

// method to get all records of contributors
const getMethod = async(req, res) => {
    try {
        const contributors = await TotalContributor.find();
        return successResponse(
            res,
            "All contributors retrieved successfully.",
            true,
            contributors
            )
    } catch (error) {
        return failedResponse(
            res,
            "failed to retrieve all contributors.",
            false
        )
    }
}


// post method to create
const postMethod = async (req, res) => {
    try {
        const { orgName, repository, year, url } = req.body;
        const newContributors = await axios.get(`${url}`)
        const contributors = await newContributors.data
        const totalContributor = await TotalContributor.create({ 
            orgName:orgName, 
            year: year, 
            repository: repository, 
            totalContributors: contributors.length });
        return successResponse(
            res,
            "total contributors of this repositort is added into db.",
            true,
            totalContributor
        )
    } catch (error) {
        return failedResponse(
            res,
            "failed to count total contributors",
            false
        )
    }
}

export {
    getMethod,
    postMethod
};