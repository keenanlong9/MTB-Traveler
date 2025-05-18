class PCMProcessor extends AudioWorkletProcessor {
    process(inputs) {
      const input = inputs[0];
      if (!input || !input[0]) return true;
  
      const channel = input[0]; // Mono
      const pcmBuffer = new ArrayBuffer(channel.length * 2); // 16-bit PCM
      const view = new DataView(pcmBuffer);
  
      for (let i = 0; i < channel.length; i++) {
        let s = Math.max(-1, Math.min(1, channel[i]));
        const sample = s < 0 ? s * 0x8000 : s * 0x7FFF;
        view.setInt16(i * 2, sample, true); // Little-endian
      }
  
      this.port.postMessage(pcmBuffer);
      return true;
    }
  }
  
  registerProcessor("pcm-processor", PCMProcessor);
  