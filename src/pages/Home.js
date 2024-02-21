import { useEffect, useState } from "react";
import { getAssetbasepath } from "../utils/Utils";
import "./Home.scss";
import { useNavigate } from "react-router-dom";
import {
  APP_NAMES,
  APP_DESCRIPTION,
  VERSION,
  PUBLISHED,
  UPDATE,
  CATEGORY,
  INSTALLS,
  APP_AVAILABILTY,
  APP_DISCLAIMER,
  APP_DOWNLOAD_LINK,
  APP_SOURCE_CODE_LINK,
  APP_IMAGES,
  IMAGE_NAMES,
  IMAGE_DESCRIPTION,
  IMAGE_CAPTURED_DATE,
  IMAGE_FILE_NAMES,
  IMAGE_CATEGORY,
  ART_NAMES,
  ART_FILE_NAMES,
  ART_DESCRIPTION,
  ART_CATEGORY,
  SCIENCE_DISCOVERY_NAMES,
  SCIENCE_DISCOVERY_FILE_NAMES,
  SCIENCE_DISCOVERY_DESCRIPTION,
  SCIENCE_DISCOVERY_DATE,
} from "../utils/Constants";

function Home() {
  const [currentApp, setCurrentApp] = useState(0);
  const [currentImage, setCurrentImage] = useState(0);
  const [currentArt, setCurrentArt] = useState(0);
  const [currentScience, setCurrentScience] = useState(0);
  const navigate = useNavigate();

  const downloadGame = () => {
    window.location.href =
      "https://download.apkcombo.com/com.VIBGYOR.ScientistvsVirus/Scientist%20vs%20Virus%20-%20Fun%20Game_1.5_apkcombo.com.apk?ecp=Y29tLlZJQkdZT1IuU2NpZW50aXN0dnNWaXJ1cy8xLjUvNy43M2MzM2U2YjI1NWJmMWQwODg1OTkyZDlhZTJjMjEzOTY4NWE0NDljLmFwaw==&iat=1708301853&sig=fb37a4b78782b8631f2eb91375ccdc4a&size=29411621&from=cf&version=latest&lang=en&fp=9deb486cfb37ea2fcbf560232f95a8f8&ip=103.147.208.103";
  };

  const handleLinkClick = (link) => {
    window.open(link, "_blank");
  };

  const handleEmailClick = () => {
    const emailAddress = "ujwalrajeev@gmail.com";
    window.open(`mailto:${emailAddress}`);
  };

  const changeApp = (direction) => {
    if (direction === "next" && currentApp < APP_NAMES.length - 1) {
      setCurrentApp(currentApp + 1);
    }
    if (direction === "previous" && currentApp !== 0) {
      setCurrentApp(currentApp - 1);
    }
  };

  const changeImage = (direction) => {
    if (direction === "next" && currentImage < IMAGE_NAMES.length - 1) {
      setCurrentImage(currentImage + 1);
    }
    if (direction === "previous" && currentImage !== 0) {
      setCurrentImage(currentImage - 1);
    }
  };

  const changeArt = (direction) => {
    if (direction === "next" && currentArt < ART_NAMES.length - 1) {
      setCurrentArt(currentArt + 1);
    }
    if (direction === "previous" && currentArt !== 0) {
      setCurrentArt(currentArt - 1);
    }
  };

  const changeScience = (direction) => {
    if (
      direction === "next" &&
      currentScience < SCIENCE_DISCOVERY_NAMES.length - 1
    ) {
      setCurrentScience(currentScience + 1);
    }
    if (direction === "previous" && currentScience !== 0) {
      setCurrentScience(currentScience - 1);
    }
  };

  const downloadApp = (link) => {
    if (link) {
      window.open(link, "_blank");
    }
  };

  useEffect(() => {}, []);
  return (
    <div className="home-container">
      <div className="home-top-bar">
        <p onClick={() => navigate("/")}>Ujwal Rajeev</p>
        <div className="home-top-middle-part">
          <p
            onClick={() =>
              handleLinkClick("https://instagram.com/ujwalrajeev/")
            }
          >
            Instagram
          </p>
          <p onClick={() => handleLinkClick("https://github.com/ujwalrajeev")}>
            GitHub
          </p>
          <p
            onClick={() =>
              handleLinkClick("https://www.threads.net/@ujwalrajeev")
            }
          >
            Threads
          </p>

          <p
            onClick={() =>
              handleLinkClick("https://pypi.org/user/ujwalrajeev/")
            }
          >
            PyPI
          </p>
        </div>
        <p onClick={handleEmailClick}>ujwalrajeev@gmail.com</p>
      </div>

      <div className="home-first-part">
        <div className="home-top-text">
          <p>
            "Welcome to my digital playground! I'm a modern-day alchemist,
            blending the elements of software engineering, game development,
            artistry, and photography into a mesmerizing tapestry of innovation.
            With a curious mind and an insatiable thirst for knowledge, I embark
            on scientific voyages to unlock the secrets of the universe,
            infusing my creations with a touch of wonder and discovery. Join me
            on this whimsical journey as we explore the infinite possibilities
            of technology and creativity, weaving together code and canvas to
            craft immersive experiences that captivate the senses and ignite the
            imagination. Welcome to my portfolio—where magic meets machine, and
            dreams come to life."
          </p>
          <img
            src={getAssetbasepath("images", "signature.png")}
            alt="signature"
          />
        </div>
      </div>

      <div className="home-second-part">
        <div className="home-second-left">
          <p>
            Born in Kerala, India, to parents who were both teachers, my passion
            for science projects ignited from an early age. Transitioning from
            science projects to computer games and applications, I found myself
            immersed in the world of coding, sparked by a childhood fascination
            with dissecting game codes. Despite initial challenges, my
            determination led me to create my first game, a text-based quiz
            crafted in Notepad, marking the inception of my journey into game
            development. Progressing to platforms like Scratch, I honed my
            skills in crafting 2D games and animations before delving into web
            development with HTML and CSS, where I crafted numerous websites,
            including my inaugural gaming site.
          </p>

          <p>
            Simultaneously, my enthusiasm for scientific exploration remained
            unwavering, culminating in the creation of a comprehensive home
            protection and energy-saving system capable of detecting
            earthquakes, rain, fire, and conserving electricity. Alongside my
            technical endeavors, I indulged in creative pursuits, weaving
            cinematic narratives in my stories and capturing moments through
            photography, showcased on my early Instagram endeavors.
          </p>

          <p>
            My coding odyssey reached new heights in my 10th standard when I
            delved into Python, birthing a plethora of terminal-based programs.
            As I pursued higher education in computer science, my repertoire
            expanded to encompass various programming languages and
            technologies, facilitating the creation of diverse websites and
            applications. Notably, amidst the challenges posed by the COVID-19
            pandemic, I ventured into the realm of game development, releasing
            my maiden Android game, "Scientist vs Virus - Fun Game," on the
            Google Play Store.
          </p>

          <p>
            Further, my academic journey culminated in the exploration of
            machine learning, exemplified by my capstone project—a fake news
            detection website leveraging ML algorithms. Transitioning seamlessly
            into my professional career at QBurst Technologies, where I assumed
            the role of lead front-end engineer, I contributed to the successful
            delivery of two projects while continually expanding my expertise in
            web development and deployment.
          </p>

          <p>
            Amidst my professional and technical pursuits, I also find solace
            and joy in sports. Holding a Taekwondo black belt and regularly
            engaging in table tennis matches, I embody a holistic approach to
            life, balancing mental acumen with physical agility.
          </p>

          <p>
            Later in my photography journey, I've transitioned to capturing
            primarily candid moments of people, architectural marvels,
            breathtaking astrophotography, and intricate macrophotography. Each
            click serves as a testament to my evolving artistic vision and
            appreciation for the beauty found in the everyday. Simultaneously,
            my drawing endeavors have shifted towards the intricate art of
            portraiture. Through careful strokes and attention to detail, I aim
            to capture the essence and emotion of the human subject, breathing
            life onto the canvas with each portrait.
          </p>

          <p>
            With a diverse array of creative pursuits spanning photography,
            drawing, and beyond, I continue to explore the boundless depths of
            artistic expression, finding inspiration in the world around me and
            infusing my work with passion and authenticity. These endeavors not
            only enrich my personal journey but also serve as a source of
            inspiration for my professional endeavors, fostering a holistic
            approach to creativity and innovation in both my personal and
            professional spheres.
          </p>
        </div>
        <div className="home-second-right">
          <div className="second-right-subpart-container">
            <p className="subpart-heading">Roles</p>
            <div className="subpart-details">
              <p>Software Engineer</p>
              <p>Game developer</p>
              <p>Photographer</p>
              <p>Artist</p>
              <p>Story writer</p>
              <p>Science reasearcher</p>
            </div>
          </div>

          <div className="second-right-subpart-container">
            <p className="subpart-heading">Education</p>
            <div className="subpart-details">
              <p>
                Federal Instiitute of Science And Technology - B.Tech Computer
                Science (8.24 CGPA)
              </p>
              <p>
                Mattannur Higher Secondary School - Higher Secondary Science
                (97%)
              </p>
              <p>Mattannur Higher Secondary School - SSLC (100%)</p>
            </div>
          </div>

          <div className="second-right-subpart-container">
            <p className="subpart-heading">Programming languages</p>
            <div className="subpart-details">
              <p>Python, JavaScript, TypeScript, C#, Java, C</p>
            </div>
          </div>

          <div className="second-right-subpart-container">
            <p className="subpart-heading">Other technologies</p>
            <div className="subpart-details">
              <p>React, HTML, CSS, SaaS, Nginx, GIT, Anime.js, SQL, Linux</p>
            </div>
          </div>

          <div className="second-right-subpart-container">
            <p className="subpart-heading">Programs</p>
            <div className="subpart-details">
              <p>
                Unity Game engine, Unreal Engine, Photoshop, Davinci Resolve
              </p>
            </div>
          </div>

          <div className="second-right-subpart-container">
            <p className="subpart-heading">
              Hobbies and other area of interests
            </p>
            <div className="subpart-details">
              <p>
                Teakwondo (Black belt), table tennis (Distrct player), YouTuber,
                drawing, gaming, guitar, farming, cooking, cinematography,
                astronomy etc.
              </p>
            </div>
          </div>

          <div className="second-right-subpart-container">
            <p className="subpart-heading">Languages</p>
            <div className="subpart-details">
              <p>Malayalam, English, Hindi, Tamil, Korean</p>
            </div>
          </div>

          <div className="second-right-subpart-container">
            <p className="subpart-heading">Awards and memberships</p>
            <div className="subpart-details">
              <p>
                NSS (National Service Scheme) member during higher secondary
                education
              </p>
              <p>IEEE member during B.Tech</p>
            </div>
          </div>
        </div>
      </div>

      <div className="home-third-part">
        <p>
          GAME <br></br>DEVELOPMENT
        </p>
        <div className="games-container">
          <div className="game-and-detail">
            <img
              src={getAssetbasepath("images", "game-image-1.png")}
              alt="scientist vs virus"
            />
            <div className="game-title-and-description">
              <div className="title-and-download-button">
                <p className="game-title">Scientist vs Virus - Fun Game</p>
                <div className="download-button" onClick={downloadGame}>
                  <p>Download</p>
                </div>
              </div>

              <div className="game-description-container">
                <p className="game-description">
                  Introducing an exhilarating adventure game featuring a daring
                  Scientist and a multitude of formidable viruses and
                  microorganisms! Your mission: aid the scientist in navigating
                  through treacherous territory, steering clear of virus
                  encounters and collisions. With each collision, viruses grow
                  stronger, spelling doom for our protagonist and bringing the
                  game to an abrupt end. Prepare for a diverse array of levels,
                  each presenting unique challenges with different types of
                  viruses, varying difficulty levels, and engaging game modes.
                  Stay on the edge of your seat as new levels are continuously
                  updated, promising endless thrills and excitement. Join the
                  Scientist on this epic journey and test your skills against
                  the evolving threat of microscopic adversaries.
                </p>

                <div className="game-details">
                  <div className="game-detail">
                    <p className="detail-header">Version</p>
                    <p>1.5 (7)</p>
                  </div>
                  <div className="game-detail">
                    <p className="detail-header">Published</p>
                    <p>April 2020</p>
                  </div>
                  <div className="game-detail">
                    <p className="detail-header">Update</p>
                    <p>July 31, 2020</p>
                  </div>
                  <div className="game-detail">
                    <p className="detail-header">Category</p>
                    <p>Casual</p>
                  </div>
                  <div className="game-detail">
                    <p className="detail-header">Installs</p>
                    <p>100+</p>
                  </div>
                </div>
                <p className="game-availability">
                  Published on Google Play Store*
                </p>
                <p className="game-disclaimer">
                  *Due to some updation issues it is now currently removed from
                  Google Play Store. On clicking the download link will download
                  the original APK file from a trusted third party website.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        Currently working on a 3D game using Unreal Engine. Coming soon!
      </div>

      <div className="home-fourth-part">
        <p>
          APP AND PROJECT <br></br>DEVELOPMENT
        </p>
        <div className="apps-container">
          <img
            src={getAssetbasepath("icons", "left-arrow.png")}
            alt="left arrow"
            onClick={() => changeApp("previous")}
            className={currentApp === 0 ? "disabled" : ""}
          />
          <div className="apps">
            <div className="app-and-detail">
              <img
                src={getAssetbasepath("images", APP_IMAGES[currentApp])}
                alt="project"
              />
              <div className="app-title-and-description">
                <div className="title-and-download-button">
                  <p className="app-title">{APP_NAMES[currentApp]}</p>
                  <div
                    className={
                      APP_DOWNLOAD_LINK[currentApp] === ""
                        ? "download-button disabled"
                        : "download-button"
                    }
                    onClick={() => downloadApp(APP_DOWNLOAD_LINK[currentApp])}
                  >
                    <p>Download</p>
                  </div>
                  <p
                    className={
                      APP_SOURCE_CODE_LINK[currentApp] !== ""
                        ? "github-button"
                        : "github-button disabled"
                    }
                    onClick={() =>
                      downloadApp(APP_SOURCE_CODE_LINK[currentApp])
                    }
                  >
                    GitHub source code
                  </p>
                </div>

                <div className="app-description-container">
                  <p className="app-description">
                    {APP_DESCRIPTION[currentApp]}
                  </p>

                  <div className="app-details">
                    <div className="app-detail">
                      <p className="detail-header">Version</p>
                      <p>{VERSION[currentApp]}</p>
                    </div>
                    <div className="app-detail">
                      <p className="detail-header">Published</p>
                      <p>{PUBLISHED[currentApp]}</p>
                    </div>
                    <div className="app-detail">
                      <p className="detail-header">Update</p>
                      <p>{UPDATE[currentApp]}</p>
                    </div>
                    <div className="app-detail">
                      <p className="detail-header">Category</p>
                      <p>{CATEGORY[currentApp]}</p>
                    </div>
                    <div className="app-detail">
                      <p className="detail-header">Installs</p>
                      <p>{INSTALLS[currentApp]}</p>
                    </div>
                  </div>
                  <p className="app-availability">
                    {APP_AVAILABILTY[currentApp]}
                  </p>
                  <p className="app-disclaimer">{APP_DISCLAIMER[currentApp]}</p>
                </div>
              </div>
            </div>
          </div>
          <img
            src={getAssetbasepath("icons", "right-arrow.png")}
            alt="right arrow"
            onClick={() => changeApp("next")}
            className={currentApp === APP_NAMES.length - 1 ? "disabled" : ""}
          />
        </div>
      </div>

      <div className="home-fourth-part">
        <p>PHOTOGRAPHY</p>
        <div className="apps-container">
          <img
            src={getAssetbasepath("icons", "left-arrow.png")}
            alt="left arrow"
            onClick={() => changeImage("previous")}
            className={currentImage === 0 ? "disabled" : ""}
          />
          <div className="apps">
            <div className="app-and-detail">
              <img
                src={getAssetbasepath("images", IMAGE_FILE_NAMES[currentImage])}
                alt="photography"
              />
              <div className="app-title-and-description">
                <div className="title-and-download-button">
                  <p className="app-title">{IMAGE_NAMES[currentImage]}</p>
                </div>

                <div className="app-description-container">
                  <p className="app-description">
                    {IMAGE_DESCRIPTION[currentImage]}
                  </p>

                  <div className="app-details">
                    <div className="app-detail">
                      <p className="detail-header">Captured on</p>
                      <p>{IMAGE_CAPTURED_DATE[currentImage]}</p>
                    </div>
                    <div className="app-detail">
                      <p className="detail-header">Category</p>
                      <p>{IMAGE_CATEGORY[currentImage]}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <img
            src={getAssetbasepath("icons", "right-arrow.png")}
            alt="right arrow"
            onClick={() => changeImage("next")}
            className={
              currentImage === IMAGE_NAMES.length - 1 ? "disabled" : ""
            }
          />
        </div>
      </div>

      <div className="explore-more-button">Explore gallery more</div>

      <div className="home-fourth-part">
        <p>CREATIVE ART</p>
        <div className="apps-container">
          <img
            src={getAssetbasepath("icons", "left-arrow.png")}
            alt="left arrow"
            onClick={() => changeArt("previous")}
            className={currentArt === 0 ? "disabled" : ""}
          />
          <div className="apps art">
            <div className="app-and-detail">
              <img
                src={getAssetbasepath("images", ART_FILE_NAMES[currentArt])}
                alt="artworks"
                className="artwork"
              />
              <div className="app-title-and-description">
                <div className="title-and-download-button art">
                  <p className="app-title">{ART_NAMES[currentArt]}</p>
                </div>

                <div className="app-description-container">
                  <p className="app-description">
                    {ART_DESCRIPTION[currentArt]}
                  </p>

                  <div className="app-details">
                    <div className="app-detail">
                      <p className="detail-header">Category</p>
                      <p>{ART_CATEGORY[currentArt]}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <img
            src={getAssetbasepath("icons", "right-arrow.png")}
            alt="right arrow"
            onClick={() => changeArt("next")}
            className={currentArt === ART_NAMES.length - 1 ? "disabled" : ""}
          />
        </div>
      </div>

      <div className="home-fourth-part">
        <p>SCIENCE EXPLORATION AND DISCOVERIES</p>
        <div className="apps-container">
          <img
            src={getAssetbasepath("icons", "left-arrow.png")}
            alt="left arrow"
            onClick={() => changeScience("previous")}
            className={currentScience === 0 ? "disabled" : ""}
          />
          <div className="apps">
            <div className="app-and-detail">
              <img
                src={getAssetbasepath(
                  "images",
                  SCIENCE_DISCOVERY_FILE_NAMES[currentScience]
                )}
                alt="artworks"
              />
              <div className="app-title-and-description">
                <div className="title-and-download-button">
                  <p className="app-title">
                    {SCIENCE_DISCOVERY_NAMES[currentScience]}
                  </p>
                </div>

                <div className="app-description-container">
                  <p className="app-description">
                    {SCIENCE_DISCOVERY_DESCRIPTION[currentScience]}
                  </p>

                  <div className="app-details">
                    <div className="app-detail">
                      <p className="detail-header">Discovered on</p>
                      <p>{SCIENCE_DISCOVERY_DATE[currentScience]}</p>
                    </div>
                    <div className="app-detail">
                      <p className="detail-header">Patent</p>
                      <p>Pending</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <img
            src={getAssetbasepath("icons", "right-arrow.png")}
            alt="right arrow"
            onClick={() => changeArt("next")}
            className={currentArt === ART_NAMES.length - 1 ? "disabled" : ""}
          />
        </div>
      </div>

      <p className="home-last-text">
        Hi, it's me Ujwal. I have created this portfolio completely using React.
        The site will be updated always. More items will be added soon.
      </p>

      <p className="home-last-text">Thank you</p>
    </div>
  );
}

export default Home;
