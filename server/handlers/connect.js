import mongoose from "mongoose";

const connect = async () => {
  const dbUrl = process.env.EXPRESS_MONGO_URI;

  try {
    await mongoose.connect(dbUrl, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("DB Connected!!");
  } catch (e) {
    console.error(e);
  }
};

export default connect;
