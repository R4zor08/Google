import { CopyButton } from './components/CopyButton';
import { GoogleLogo } from './components/GoogleLogo';
import { SearchIcon, MicIcon, ImageIcon } from 'lucide-react';
const CODE_1 = `import 'package:flutter/material.dart';

void main() {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  @override
  Widget build(BuildContext context) {
    return const MaterialApp(
      debugShowCheckedModeBanner: false,
      home: MainScreen(),
    );
  }
}

class MainScreen extends StatelessWidget {
  const MainScreen({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: const Color(0xFFF4F7FF),

      appBar: AppBar(
        backgroundColor: const Color(0xFFF8FAFF),
        elevation: 0,
        centerTitle: true,
        toolbarHeight: 70,
        title: const Text(
          'MLS Store | Buy Shirt',
          style: TextStyle(
            fontSize: 15,
            fontWeight: FontWeight.w700,
            color: Color(0xFF113C8C),
          ),
        ),
      ),

      body: SafeArea(
        top: false,
        child: Center(
          child: Container(
            width: 500,
            height: double.infinity,
            decoration: BoxDecoration(
              color: const Color(0xFFF8FAFF),
              borderRadius: BorderRadius.circular(28),
            ),
            child: Column(
              children: [
                // DETAILS SECTION - text first before the image
                Container(
                  width: 450,
                  padding: const EdgeInsets.only(
                    top: 55,
                    left: 35,
                    right: 35,
                    bottom: 35,
                  ),
                  color: const Color.fromARGB(255, 255, 255, 255),
                  child: const Column(
                    children: [
                      Text(
                        'FRANCE AUTHENTIC\\nHOME JERSEY 2026',
                        textAlign: TextAlign.center,
                        style: TextStyle(
                          fontSize: 25,
                          height: 0.9,
                          fontWeight: FontWeight.w900,
                          letterSpacing: 1.2,
                          color: Color(0xFF113C8C),
                        ),
                      ),

                      SizedBox(height: 22),

                      Text(
                        'Nike',
                        style: TextStyle(
                          fontSize: 14,
                          color: Color(0xFF8B94AA),
                          fontWeight: FontWeight.w500,
                        ),
                      ),

                      SizedBox(height: 12),

                      Text(
                        '\\$165',
                        style: TextStyle(
                          fontSize: 22,
                          color: Color(0xFF113C8C),
                          fontWeight: FontWeight.w900,
                        ),
                      ),
                    ],
                  ),
                ),

                // IMAGE SECTION - moved below the text
                Container(
                  width: double.infinity,
                  height: 375,
                  color: const Color(0xFFEAF0FF),
                  child: Center(
                    child: Image.asset(
                      'assets/images/nike.png',
                      width: 450,
                      height: 580,
                      fit: BoxFit.contain,
                    ),
                  ),
                ),
              ],
            ),
          ),
        ),
      ),
    );
  }
}`;
const CODE_2 = `import 'package:flutter/material.dart';

void main() => runApp(const JerseyApp());

class JerseyApp extends StatelessWidget {
  const JerseyApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      debugShowCheckedModeBanner: false,
      title: 'Jersey UI',
      theme: ThemeData(fontFamily: 'Arial'),
      home: const ProductScreen(),
    );
  }
}

class ProductScreen extends StatelessWidget {
  const ProductScreen({super.key});

  static const blue = Color(0xFF113C8C);
  static const bg = Color(0xFFF4F7FF);
  static const cardBg = Color(0xFFF8FAFF);
  static const imageBg = Color(0xFFEAF0FF);

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: bg,
      appBar: AppBar(
        backgroundColor: cardBg,
        elevation: 0,
        centerTitle: true,
        toolbarHeight: 70,
        title: const Text(
          'MLS Store | Buy Shirt',
          style: TextStyle(
            color: blue,
            fontSize: 15,
            fontWeight: FontWeight.w700,
          ),
        ),
      ),
      body: SafeArea(
        top: false,
        child: Center(
          child: Container(
            width: 500,
            height: double.infinity,
            decoration: BoxDecoration(
              color: cardBg,
              borderRadius: BorderRadius.circular(28),
            ),
            child: Column(
              children: [
                Container(
                  height: 375,
                  width: double.infinity,
                  color: imageBg,
                  child: Image.asset(
                    'assets/images/nike.png',
                    width: 450,
                    height: 580,
                    fit: BoxFit.contain,
                  ),
                ),

                Container(
                  width: 450,
                  padding: const EdgeInsets.only(top: 58, left: 35, right: 35),
                  color: Colors.white,
                  child: const Column(
                    children: [
                      Text(
                        'FRANCE AUTHENTIC\\nHOME JERSEY 2026',
                        textAlign: TextAlign.center,
                        style: TextStyle(
                          color: blue,
                          fontSize: 25,
                          height: 0.8,
                          fontWeight: FontWeight.w900,
                          letterSpacing: 1.2,
                        ),
                      ),
                      SizedBox(height: 22),
                      Text(
                        'Nike',
                        style: TextStyle(
                          color: Color(0xFF8B94AA),
                          fontSize: 14,
                          fontWeight: FontWeight.w500,
                        ),
                      ),
                      SizedBox(height: 12),
                      Text(
                        '\\$165',
                        style: TextStyle(
                          color: blue,
                          fontSize: 22,
                          fontWeight: FontWeight.w900,
                        ),
                      ),
                    ],
                  ),
                ),
              ],
            ),
          ),
        ),
      ),
    );
  }
}

flutter:
  assets:
    - assets/images/nike.png`;
export function App() {
  return (
    <div className="w-full min-h-screen bg-white flex flex-col">
      {/* Top navigation bar */}
      <nav className="w-full flex items-center justify-end gap-5 px-6 py-4 text-sm text-gray-700">
        <a href="#" className="hover:underline">
          Gmail
        </a>
        <a href="#" className="hover:underline">
          Images
        </a>
        <button
          type="button"
          aria-label="Google apps"
          className="p-2 rounded-full hover:bg-gray-100 transition-colors">
          
          <svg
            viewBox="0 0 24 24"
            width="20"
            height="20"
            fill="currentColor"
            className="text-gray-700">
            
            <circle cx="5" cy="5" r="2" />
            <circle cx="12" cy="5" r="2" />
            <circle cx="19" cy="5" r="2" />
            <circle cx="5" cy="12" r="2" />
            <circle cx="12" cy="12" r="2" />
            <circle cx="19" cy="12" r="2" />
            <circle cx="5" cy="19" r="2" />
            <circle cx="12" cy="19" r="2" />
            <circle cx="19" cy="19" r="2" />
          </svg>
        </button>
        <button
          type="button"
          className="ml-1 w-9 h-9 rounded-full bg-[#1A73E8] text-white font-medium text-sm flex items-center justify-center hover:shadow-md transition-shadow"
          aria-label="Account">
          
          A
        </button>
      </nav>

      {/* Main content */}
      <main className="flex-1 flex flex-col items-center px-4">
        <div className="w-full max-w-xl flex flex-col items-center mt-24 sm:mt-28">
          {/* Google logo */}
          <GoogleLogo className="text-7xl sm:text-8xl mb-8" />

          {/* Search bar (decorative) */}
          <div className="w-full relative mb-8">
            <div className="flex items-center gap-3 w-full h-12 px-4 rounded-full border border-gray-200 shadow-[0_1px_6px_rgba(32,33,36,0.12)] hover:shadow-[0_1px_8px_rgba(32,33,36,0.2)] transition-shadow bg-white">
              <SearchIcon className="w-5 h-5 text-gray-500 shrink-0" />
              <input
                type="text"
                aria-label="Search"
                className="flex-1 h-full bg-transparent outline-none text-sm text-gray-800 placeholder:text-gray-500"
                placeholder="Search Google or type a URL" />
              
              <button
                type="button"
                aria-label="Search by voice"
                className="p-1 hover:bg-gray-100 rounded-full transition-colors">
                
                <MicIcon className="w-5 h-5 text-[#4285F4]" />
              </button>
              <button
                type="button"
                aria-label="Search by image"
                className="p-1 hover:bg-gray-100 rounded-full transition-colors">
                
                <ImageIcon className="w-5 h-5 text-[#4285F4]" />
              </button>
            </div>
          </div>

          {/* Copy buttons styled like Google's homepage buttons */}
          <div className="flex flex-wrap items-center justify-center gap-3">
            <CopyButton
              label="A"
              description="Code #1 — Verbose version"
              code={CODE_1} />
            
            <CopyButton
              label="B"
              description="Code #2 — Refactored version"
              code={CODE_2} />
            
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="w-full bg-[#F2F2F2] text-sm text-[#70757A] mt-12">
        <div className="px-6 py-3 border-b border-gray-200">Philippines</div>
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between px-6 py-3 gap-2">
          <div className="flex flex-wrap gap-6">
            <a href="#" className="hover:underline">
              About
            </a>
            <a href="#" className="hover:underline">
              Advertising
            </a>
            <a href="#" className="hover:underline">
              Business
            </a>
            <a href="#" className="hover:underline">
              How Search works
            </a>
          </div>
          <div className="flex flex-wrap gap-6">
            <a href="#" className="hover:underline">
              Privacy
            </a>
            <a href="#" className="hover:underline">
              Terms
            </a>
            <a href="#" className="hover:underline">
              Settings
            </a>
          </div>
        </div>
      </footer>
    </div>);

}