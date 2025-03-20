import mongoose from "mongoose";

const messageSchema = new mongoose.Schema(
    {
        senderId: {     
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",    // Tells Mongo it's reference to user model.
            required: true,
        },
        receiverId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",    // Tells Mongo it's reference to user model.
            required: true,
        },
        text: {
            type: String,
            required: function() {
                return !this.image; // Text is required only if there's no image
            }
        },
        image: {
            type: String,
        },
    },
    { timestamps: true }    // Allows to post time.
);

const Message = mongoose.model("Message", messageSchema);

export default Message;