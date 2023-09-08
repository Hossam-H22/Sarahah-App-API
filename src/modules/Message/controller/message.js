
import messageModel from "../../../../DB/Models/Message.model.js";
import userModel from "../../../../DB/Models/User.model.js";
import { asyncHandler } from "../../../utils/errorHandling.js";



export const getMessages = asyncHandler(async (req, res, next) => {
    const messageList = await messageModel.find({receiverId: req.user._id})
    return res.json({ message: "Done", messageList});
})


export const sendMessage = asyncHandler(async (req, res, next) => {

    const { receiverId } = req.params;
    const { message } = req.body;

    const user = await userModel.findById(receiverId);

    if(!user) {
        return next(new Error("In-valid accountId", {cause: 404}));
    }

    const createMesssage = await messageModel.create({
        receiverId: user._id,
        message
    })


    return res.status(201).json({ message: "Done", createMesssage});
})


export const deleteMessage = asyncHandler(async (req, res, next) => {

    const { messageId } = req.params;

    const message = await messageModel.deleteOne({_id: messageId, receiverId: req.user._id });

    return message.deletedCount ? res.status(200).json({ message: "Done"}) 
                    : next(new Error("In-valid meassage Id or ownerId", {cause: 400}));
})



