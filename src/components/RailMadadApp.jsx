import React, { useState,useEffect } from 'react';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';

// import {bookingicon_1} from 'public/bookingicon_1.png'
// import {bookingicon_2} from 'public/bookingicon_2.png'
// import {bookingicon_4} from 'public/bookingicon_4.png'
// import {bookingicon_5} from 'public/bookingicon_5.png'


const RailMadadApp = () => {
  const [submissionType, setSubmissionType] = useState('video');
  const [file, setFile] = useState(null);

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   console.log('Form submitted with type:', submissionType);
  // };

  function handleChange(event) {
    setFile(event.target.files[0]);
  }

  const logoItems = [
    { name: 'Ticket Booking', src: '/bookingicon_1.png' },
    { name: 'Train Enquiry', src: '/bookingicon_2.png' },
    { name: 'Reservation Enquiry', src: '/bookingicon_2.png' },
    { name: 'Retiring Room Booking', src: '/bookingicon_4.png' },
    { name: 'Indian Railways', src: '/bookingicon_5.png' },
    { name: 'UTS Booking', src: '/bookingicon_2.png' },
    { name: 'Freight Bussiness', src: '/bookingicon_5.png' },
    { name: 'Railway Parcel Website', src: '/bookingicon_2.png' },
  ];
  // const logoItems = [
  //   'Ticket Booking', 'Train Enquiry', 'Reservation Enquiry', 'Retiring Room Booking',
  //   'Indian Railways', 'UTS Ticketing', 'Freight Business', 'Railway Parcel Website'
  // ];

  // const [submissionType, setSubmissionType] = useState('video');
  // const [file, setFile] = useState(null);
  const [transcriptText, setTranscriptText] = useState('');

  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition
  } = useSpeechRecognition();

  useEffect(() => {
    setTranscriptText(transcript);
  }, [transcript]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted with type:', submissionType);
    if (submissionType === 'audio') {
      console.log('Transcript:', transcriptText);
    }
  };

  function handleChange(event) {
    setFile(event.target.files[0]);
  }

  const startListening = () => SpeechRecognition.startListening({ continuous: true });

  const stopListening = () => {
    SpeechRecognition.stopListening();
    setTranscriptText(transcript);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow flex flex-col md:flex-row">
        {/* Left side logos */}
        <div className="relative z-10 w-full md:w-2/5 p-4 order-2 md:order-1 bg-transparent">
          <div className="grid grid-cols-2 gap-4">
            {logoItems.map((item, index) => (
              <div key={index} className="flex flex-col items-center justify-center p-4 bg-white rounded-lg shadow">
                <img src={item.src} alt={item.name} className="w-12 h-12 bg-gray-300 rounded-full mb-2" />
                <span className="text-sm text-center">{item.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right side grievance form */}
        <div className="w-full md:w-3/5 p-4 order-1 md:order-2">
          <div className="bg-gray-200 p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-bold mb-4 text-custom-maroon">Grievance Detail</h2>
            <form onSubmit={handleSubmit}>
              <div className="flex items-center space-x-4 mb-4">
                {['video', 'text', 'audio'].map((type) => (
                  <label key={type} className="flex items-center text-lg  checked:bg-custom-purple text-custom-purple">
                    <input
                      type="radio"
                      value={type}
                      checked={submissionType === type}
                      onChange={(e) => setSubmissionType(e.target.value)}
                      className="mr-2"
                    />
                    {type.charAt(0).toUpperCase() + type.slice(1)}
                  </label>
                ))}
              </div>

              {submissionType === 'video' && (
                <div className="mb-4">
                  <div className="border-2 border-dashed border-gray-300 p-4 text-center">
                    <p>Drag and drop your file or</p>
                    <input type="file" onChange={handleChange} className="mt-2"/>
                  </div>
                  <button className="w-full mt-2 px-4 py-2 bg-custom-maroon text-white rounded">
                    UPLOAD VIDEO/PHOTO FILE
                  </button>
                </div>
              )}

              {submissionType === 'text' && (
                <div className="mb-4">
                  <textarea
                    className="w-full p-2 border rounded"
                    rows="4"
                    placeholder="Enter your grievance text here"
                  ></textarea>
                </div>
              )}

{submissionType === 'audio' && (
                <div className="mb-4">
                  {browserSupportsSpeechRecognition ? (
                    <div>
                      <p>Microphone: {listening ? 'on' : 'off'}</p>
                      <button
                        type="button"
                        onClick={listening ? stopListening : startListening}
                        className="px-4 py-2 bg-custom-purple text-white rounded mr-2"
                      >
                        {listening ? 'Stop' : 'Start'} Recording
                      </button>
                      <button
                        type="button"
                        onClick={resetTranscript}
                        className="px-4 py-2 bg-gray-500 text-white rounded"
                      >
                        Reset
                      </button>
                      <div className="mt-4 p-2 bg-white rounded">
                        <p>{transcriptText}</p>
                      </div>
                    </div>
                  ) : (
                    <p>Browser doesn't support speech recognition.</p>
                  )}
                </div>
              )}

              <button type="submit" className="w-full px-4 py-2 bg-custom-maroon text-white rounded">
                SUBMIT
              </button>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
};

export default RailMadadApp;