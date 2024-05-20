# Audio Cutter Tool

This project is a serverless, client-side audio cutter tool built with Next.js. It replicates the functionality of [vocalremover.org/cutter](https://vocalremover.org/cutter), allowing users to trim audio files directly in their browsers. The tool leverages JavaScript libraries and Web APIs for seamless performance.

## Features

- Load and initialize FFmpeg for audio processing in the browser.
- Upload audio files directly from the user's device.
- Specify start and end times to trim the audio.
- Download the trimmed audio file.
- Responsive and user-friendly UI.

## Technologies Used

- **Next.js**: Framework for React applications.
- **React**: Library for building user interfaces.
- **Tailwind CSS**: Utility-first CSS framework for styling.
- **@ffmpeg/ffmpeg**: JavaScript port of FFmpeg for audio processing.
- **@ffmpeg/util**: Utility functions for working with FFmpeg in the browser.

## Getting Started

Follow these instructions to set up the project locally.

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository:**

   ```sh
   git clone https://github.com/your-username/audio-cutter-tool.git
   cd audio-cutter-tool
   ```

2. **Install dependencies:**

   ```sh
   npm install
   ```

   or

   ```sh
   yarn install
   ```

3. **Start the development server:**

   ```sh
   npm run dev
   ```

   or

   ```sh
   yarn dev
   ```

   The application will be available at [http://localhost:3000](http://localhost:3000).

## Usage

1. **Load FFmpeg:**
   - Click the "Load ffmpeg-core" button to load the necessary FFmpeg files.

2. **Upload Audio File:**
   - Use the file input to upload an audio file from your device.

3. **Specify Trim Times:**
   - Enter the start and end times in seconds to specify the portion of the audio to trim.

4. **Trim and Download:**
   - Click the "Trim Audio" button to process the file. The trimmed audio will be available for download.

## Folder Structure

```
audio-cutter-tool/
├── components/
│   └── AudioCutter.js   # Main component for the audio cutter tool
├── pages/
│   └── index.js         # Main entry point for the Next.js application
├── public/
│   └── ...              # Static assets
├── styles/
│   └── globals.css      # Global styles
├── README.md            # This file
├── package.json         # Project metadata and scripts
└── ...
```

## Customization

- **UI Framework:** Tailwind CSS is used for styling. You can customize the UI by editing the classes in the JSX files.
- **FFmpeg Core Version:** Adjust the version of FFmpeg core by updating the URLs in the `AudioCutter.js` component.

## Contributing

Feel free to fork this repository and submit pull requests. Contributions are welcome!

## License

This project is licensed under the MIT License.

## Acknowledgements

- [Next.js](https://nextjs.org/)
- [React](https://reactjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [@ffmpeg/ffmpeg](https://github.com/ffmpegwasm/ffmpeg.wasm)
- [@ffmpeg/util](https://github.com/ffmpegwasm/util)


### Notes

1. Replace `"https://github.com/your-username/audio-cutter-tool.git"` with the actual URL of your repository.
2. Ensure you add instructions for any additional steps or configurations specific to your setup.