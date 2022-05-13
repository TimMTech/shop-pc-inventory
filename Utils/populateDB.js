const mongoose = require("mongoose");
const dotenv = require("dotenv");
const path = require("path");
const categoryTemplate = require("../backend/Models/categoryTemplate.js");
const manufacturerTemplate = require("../backend/Models/manufacturerTemplate.js");
const partsTemplate = require("../backend/Models/partsTemplate.js");
const async = require("async");

dotenv.config({ path: path.resolve(__dirname, "../.env") });

const categoryArray = [];
const manufacturerArray = [];
const partArray = [];
const db = mongoose.connection;

const addData = () => {
  try {
    mongoose.connect(process.env.DATABASE_ACCESS, (err, success) => {
      if (success) {
        console.log("DATABASE CONNECTED");
        db.collection("categories").insertMany(categoryArray, (err, result) => {
          if (err) {
            console.log("Categories Collection Error", err);
          }
          console.log("CATEGORY DATA PUSHED TO DB", result);
        });
        db.collection("manufacturers").insertMany(
          manufacturerArray,
          (err, result) => {
            if (err) {
              console.log("Manufacturer Collection Error", err);
            }
            console.log("MANUFACTURER DATA PUSHED TO DB", result);
          }
        );
        db.collection("parts").insertMany(partArray, (err, result) => {
          if (err) {
            console.log("Parts Collection Error", err);
          }
          console.log("PARTS DATA PUSHED TO DB", result);
        });
        setTimeout(() => {
          mongoose.connection.close();
          console.log("DB DATA ADDITION SUCCESSFULL. CONNECTION CLOSED");
          return;
        }, 10000);
      } else {
        console.log("DATABASE CONNECTION FAILED", err);
      }
    });
  } catch (err) {
    console.log("Data Addition Function Ran Into Error");
    mongoose.connection.close();
  }
};

const categoryFactory = (title, description, cb) => {
  const category = {
    title: title,
    description: description,
  };
  const newCategory = new categoryTemplate(category);
  categoryArray.push(newCategory);
  cb(null, category);
};

const manufacturerFactory = (title, description, cb) => {
  const manufacturer = {
    title: title,
    description: description,
  };
  const newManufacturer = new manufacturerTemplate(manufacturer);
  manufacturerArray.push(newManufacturer);
  cb(null, manufacturer);
};

const partsFactory = (
  title,
  cost,
  quantity,
  description,
  category,
  manufacturer,
  cb
) => {
  const parts = {
    title: title,
    cost: cost,
    quantity: quantity,
    description: description,
    category: category,
    manufacturer: manufacturer,
  };
  const newParts = new partsTemplate(parts);
  partArray.push(newParts);
  cb(null, parts);
};

const createCategory = (cb) => {
  async.parallel(
    [
      (callback) => {
        categoryFactory(
          "Chassis",
          "The base frame of a CPU conveyance",
          callback
        );
      },
      (callback) => {
        categoryFactory(
          "Processor",
          "The logic circuitry that responds to and processes the basic instructions that drive a computer.",
          callback
        );
      },
      (callback) => {
        categoryFactory(
          "GPU",
          "Graphics processing unit, a specialized processor originally designed to accelerate graphics rendering. GPUs can process many pieces of data simultaneously, making them useful for machine learning, video editing, and gaming applications.",
          callback
        );
      },
      (callback) => {
        categoryFactory(
          "Memory",
          "is a device or system that is used to store information for immediate use in a computer or related computer hardware and digital electronic devices.",
          callback
        );
      },
      (callback) => {
        categoryFactory(
          "Mother Board",
          "the backbone that ties the computer's components together at one spot and allows them to talk to each other.",
          callback
        );
      },
    ],
    cb
  );
};

const createManufacturer = (cb) => {
  async.parallel(
    [
      (callback) => {
        manufacturerFactory(
          "Nvidia GeForce",
          "engages in the design and manufacture of computer graphics processors, chipsets, and related multimedia software. It operates through the following segments: Graphics Processing Unit (GPU), Tegra Processor, and All Other.",
          callback
        );
      },
      (callback) => {
        manufacturerFactory(
          "AMD",
          "global company that specializes in manufacturing semiconductor devices used in computer processing. The company also produces flash memories, graphics processors, motherboard chip sets, and a variety of components used in consumer electronics goods.",
          callback
        );
      },
      (callback) => {
        manufacturerFactory(
          "Intel",
          "best known for developing the microprocessors found in most of the world's personal computers.",
          callback
        );
      },
      (callback) => {
        manufacturerFactory(
          "MSI",
          "designs, develops and provides computer hardware, related products and services, including laptops, desktops, motherboards, graphics cards, All-in-One PCs, servers, industrial computers, PC peripherals, car infotainment products, etc.",
          callback
        );
      },
      (callback) => {
        manufacturerFactory(
          "Kingston",
          "Kingston makes it quick and easy to select compatible RAM memory for your Desktop PC, Laptop, or Server.",
          callback
        );
      },
    ],
    cb
  );
};

const createParts = (cb) => {
  async.parallel(
    [
      (callback) => {
        partsFactory(
          "RTX 3070",
          499.99,
          100,
          "It uses the big GA104 chip and offers 5,888 cores and 8 GB GDDR6 graphics memory.",
          "GPU",
          "Nvidia GeForce",
          callback
        );
      },
      (callback) => {
        partsFactory(
          "RTX 3080",
          699.99,
          97,
          "They are built with enhanced RT Cores and Tensor Cores, new streaming multiprocessors, and superfast G6X memory for an amazing gaming experience.",
          "GPU",
          "Nvidia GeForce",
          callback
        );
      },
      (callback) => {
        partsFactory(
          "RTX 3090",
          1499.99,
          21,
          "is a big ferocious GPU (BFGPU) with TITAN class performance. It's powered by Ampere—NVIDIA's 2nd gen RTX architecture—doubling down on ray tracing and AI performance with enhanced Ray Tracing (RT) Cores, Tensor Cores, and new streaming multiprocessors.",
          "GPU",
          "Nvidia GeForce",
          callback
        );
      },
      (callback) => {
        partsFactory(
          "Radeon RX 6900 XT",
          1299.99,
          33,
          "the RX 6900 XT comes with 80 CUs and 5,120 stream processors.",
          "GPU",
          "AMD",
          callback
        );
      },
      (callback) => {
        partsFactory(
          "MPG Gungnir 110R",
          99.99,
          10,
          "Excel with the MPG GUNGNIR 110 Series, the epitome of high standards in a mid-tower chassis. Designed with versatility, constructed from high-quality materials, and born for performance. Choose eminence and embrace excellence.",
          "Chassis",
          "MSI",
          callback
        );
      },
      (callback) => {
        partsFactory(
          "Core i9-10900KF",
          369.99,
          2,
          "With up to 5.3 GHz clock speed, 10 cores and 20 threads, the Intel Core i9-10900KF processor supercharges your new PC build and enables incredible experiences and productivity for gamers, content creators, and mainstream users.",
          "Processor",
          "Intel",
          callback
        );
      },
      (callback) => {
        partsFactory(
          "FURY Beast 32GB DDR4 3200",
          149.99,
          77,
          "Low-profile heat spreader design Cost-efficient, high-performance DDR4 upgrade Intel XMP-ready Ready for AMD Ryzen Speeds up to 3733MHz and kit capacity up to 128GB",
          "Memory",
          "Kingston",
          callback
        );
      },
      (callback) => {
        partsFactory(
          "MPG Z690 Carbon WIFI DDR5",
          349.99,
          4,
          "The latest wireless solution supports 6GHz spectrum, MU-MIMO and BSS color technology, delivering speeds up to 2400Mbps",
          "Mother Board",
          "MSI",
          callback
        );
      },
    ],
    cb
  );
};

async.series(
  [createCategory, createManufacturer, createParts],
  (err, result) => {
    if (err) {
      console.log("Series Error", err);
    } else {
      console.log("DATA PREPARED FOR ADDITION", result);
    }
  }
);

addData();
